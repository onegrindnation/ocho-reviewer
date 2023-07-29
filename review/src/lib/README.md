# Library Design

## Supported Actions
- Playback Speed
- Skip To
- Play
- Pause
- Overlay

## Action Format

```
{
    "type": <control, overlay, skip-to>,
    "at": <time in ms>,
    "speed": <speed 0..1>,
    "playback": <play, pause>,
    "overlay": {
        "location": <x 0..1, y 0..1>,
        "html": <html>
    },
    "event": <event-name>
}
```

## Architecture

- An action runner contains an action script.
- The script is an ordered sequence of actions (Action Format)
- The action runner has the following functional interface:
  - addAction(action)
  - run()
  - halt()
  - reset()
- The action runner will emit events as specified in the action format. They are fired as each action is taken, if they exist.
- The action runner has the following special events:
  - "start-run"
  - "halted"
  - "reset"
  - "last-action"
