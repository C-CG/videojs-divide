# videojs-divide

Divide the progress bar into various segments.

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-divide
```

## Usage

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available. We are then able to pass in our `options`, this contatins a set of `divides` each contain:

* `startTime` : Time in which you want the divide to start (seconds)
* `endTime` : Time in which you want the divide to end (seconds)
* `pose` : Contains the title you want to appear during `onHover` of a `divide`

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-divide.min.js"></script>
<script>
  var player = videojs('my-video');
  const options = { divides: [{ "startTime": 0, "endTime": 30, "pose": "Pose 1" }, ... ]}
  player.divide(options)
</script>
```
## License

MIT. Copyright (c) Calvin-Castle Gill


[videojs]: http://videojs.com/
