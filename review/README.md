# Ocho Reviewer Application

Allows you to annotate a youtube fight video with sets and chapters. In each set you can:
- Label the fighters and their equipment style
- Label the set
- Label the game and occasion (park day, event, private practice)
- Set date and time
- Set the transition to the next set (normal, fast, skip-to)

In each chapter you can:
- Label the fighters and their equipment style
- Label the chapter
- Describe the chapter
- Set playback speeds
- Set the transition to the next set (normal, fast, skip-to)

Other people may search for your annotated reviews by fighter(s), equipment style, date, occcasion, set or chapter label, or keyword search on a chapter description.

Once opened, the video is played back using the settings in the review and annotated with overlays.

Other viewers may comment on the video by time-stamp and these comments will replay for all subsequent viewers.

## Reviewer Schema

- Review play starts with the first set (defined by starts-with) and proceeds set-by-set until the last set is played. After a set completes, the next set is defined by ```next```. Loops will repeat indefinitely.
- Play starts automatically or manually based on the ```start``` setting.
- For each set, play starts with the chapter defined in ```starts-with``` and proceeds chapter-by-chapter until the last chapter is played. Each chapter is only played ```max-play``` times, which is a decrementing int or "forever".
- Play starts automatically for the first chapter of a playing set.

```
{
    "video-provider": "youtube",
    "video-id": <video url parth>
    "participants": [
        {
            "reviewer-id": <id>,
            "name": <name>,
            "external-id": <id for repository other than ocho api>,
            "external-name": <name from the external repository>
        }, ...
    ],
    "sets": [
        {
            "label": <label>,
            "description": <description>,
            "associaation": {
                "name": <game: amtgard, bel, private>,
                "major": <kingdom, etc>,
                "minor": <park, unit>
            },
            "occasion": <event name or type, e.g. practice>,
            "date": <datetime utc>,
            "chapters": [
                {
                    "participants": [
                        {
                            "id": <reviewer-id from above>,
                            "x": <relative x position 0..1>,
                            "y": <relative y position 0..1>,
                            "style-id": <style id>,
                            "style": <name for style>
                        }, ...
                    ],
                    "label": <label>,
                    "description": <description>,
                    "playback-speed": <speed>,
                    "start-at": <seconds>,
                    "end-at": <seconds>,
                    "annotation": {
                        "x": <% x offset 0..1>,
                        "y": <% y offset 0..1>,
                        "note": <note>
                    }
                }
            ]
        }
    ],
    "comments": [
        {
            "at": <seconds>,
            "by-id": <reviewer-id>,
            "by": <reviewer>,
            "comment": <comment>
        }
    ]
}
```

### Viewer Controls
- Search for review
- Play review, pause review, next chapter, next set, repeat chapter, repeat set, repeat chapter continuously, repeat set continuously
- Comment at time
- Get review-set-chapter direct URL
- Create set
    - Add chapter at current time
        - Add fighter
        - Add playback speed
    - End chapter at current time
        - End chapter after x seconds
    - Edit chapter
        - Set next chapter by
- Edit set
    - Set next set by

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
