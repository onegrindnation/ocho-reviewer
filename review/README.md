# Ocho Reviewer Application

Allows you to annotate a youtube fight videos:
- Annotate a video with
  - Date, occasion
  - Fights
    - Beginning and end of fight
    - Annotate each fighter, by indicating their face and equipment style
    - Mark beginning and end of exchanges
  - Comment by time stamp or reply to comment

Other people may search for your annotated reviews by fighter(s), equipment style, date, occcasion, set or chapter label, or keyword search on a chapter description.

Once opened, the video is played back using the viewer settings.

Default settings:
- Skip from fight to fight
- Pause and indicate fighter and equipment style for 4 seconds per exchange
- Play exchanges at 1/4 speed

Other viewers may comment on the video by time-stamp and these comments will replay for all subsequent viewers.

## Reviewer Schema

``` json
{
    "publisher": "youtube",
    "url": <url>,
    "date": <date>,
    "occasion": <occasion>,
    "organization": <amtgard, belegarth, dagohrir, buhurt>,
    "contest": [
        {
            "start": <offset-ms>,
            "end": <offset-ms>,
            "contestants": [
                {
                    "moniker": <moniker>,
                    "name": <optional name>,
                    "style": <style>,
                    "face": {
                        "origin": [x,y],
                        "size": [width,height]
                    }
                }, ...
            ],
            "exchanges": [
                {
                    "start": <offset-ms>,
                    "end": <offset-ms>
                }, ...
            ]
        }, ...
    ],
    "comments": [
        {
            "id": <guid>,
            "by": <name>,
            "at": <datetime>,
            "comment-at": <offset-ms>,
            "message": <message>,
            "replies": {
                "by": <name>,
                "at": <datetime>,
                "message": <message>
            }, ...
        }, ...
    ]
}
```

## Controls

### Viewer Controls
- Search for review
- Play review, pause review, next fight, previous fight, next exchange, previous exchange, repeat exchange
- Comment at time

### Editor Controls
- Enter YouTube video URL
- Mark start, end of fight
  - Click to annotate fighter, with type-ahead search
  - Annotate equipment from drop-down
- Mark start, end of exchange
- Save

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
