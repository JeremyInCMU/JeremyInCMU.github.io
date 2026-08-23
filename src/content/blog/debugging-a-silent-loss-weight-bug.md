---
title: 'A loss weight bug that cost me two weeks'
description: 'The model trained, the loss went down, and one hand quietly learned nothing. Notes on a bug with no error message.'
pubDate: 2026-08-18
tags: ['debugging', 'training', 'robot-learning']
---

The worst bugs don't raise exceptions. This one trained cleanly for two weeks, produced a
falling loss curve, and taught the left hand almost nothing.

## The setup

A dual-hand manipulation policy predicting both hands' actions in a single forward pass.
The two hands are packed into one tensor, and the loss applies per-hand weights so the
dominant hand doesn't drown out the other.

The tensor layout was modality-major: all of the left hand's dimensions, then all of the
right hand's. The weight vector was written assuming the interleaved layout, alternating
left and right per timestep.

Both are the same shape. Nothing complains.

## Why it hid so well

The total loss still went down, because the right hand dominated the gradient and the right
hand's weights happened to land mostly on right-hand dimensions. Aggregate metrics looked
fine. Validation loss tracked training loss. Nothing in the dashboard was red.

The tell, once I knew to look for it, was that per-hand validation error had a large,
*stable* gap — not a gap that narrowed as training progressed. A hand that's learning
slowly closes the gap eventually. A hand whose loss is being multiplied by roughly the wrong
weights just sits there.

## Finding it

What worked was not reading the loss code again. I'd read it many times; it looked correct
because it *was* internally consistent — it just disagreed with the layout upstream.

What worked was an assertion that made the assumption explicit:

```python
# Force the layout assumption to fail loudly instead of silently.
def apply_hand_weights(loss_per_dim, weights, layout):
    assert layout == "modality_major", f"weights assume modality-major, got {layout}"
    assert loss_per_dim.shape == weights.shape, (
        f"weight/loss shape mismatch: {loss_per_dim.shape} vs {weights.shape}"
    )
    return (loss_per_dim * weights).mean()
```

The shape assertion passed. The layout assertion failed on the first batch. The bug had a
name about ninety seconds later.

## What I actually changed about how I work

The shape check was never going to catch this — both layouts have identical shapes. Shape
assertions feel like validation but they only cover the errors that change dimensions,
which is the easy class.

So now, for anything where the same shape can mean two different things:

- **Name the layout, don't infer it.** Pass it explicitly and assert on the name. A string
  comparison catches what a shape comparison can't.
- **Log per-component metrics from the first run,** not after something looks wrong.
  Aggregate loss hides exactly the failures that matter in multi-component models.
- **Distrust stable gaps.** Slow learning converges. A constant offset usually means a
  wiring problem, not a capacity problem.

Two weeks for one assertion. The assertion is three lines and it's still in the codebase.
