const MotorCortex = require("@kissmybutton/motorcortex");
const Player = require("@kissmybutton/motorcortex-player");
const VideoPluginDefinition = require("../src/main");
const VideoPlugin = MotorCortex.loadPlugin(VideoPluginDefinition);


/**** 1 ******/
/***** CASI ******/
const MyClip = new MotorCortex.Clip({
    host: document.getElementById("video-container"),
    id: "my-root-clip",
    html: `<div id="video-container"></div>`,
    css: `
        #video-container{
            width: 1280px;
            height: 720px;
        }
    `
});


const VideoClip = new VideoPlugin.Clip({
    sources: ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"],
    startFrom: 120,
    width: 1280,
    height: 720
}, {
    selector: '#video-container',
    id: 'videoClip'
});

const Playback1 = new VideoPlugin.Playback({
    selector: "!#video",
    duration: 25000
});

const Effect1 = new VideoPlugin.VideoEffect({
    animatedAttrs: {
        filter: {
            blur: 6
        }
    }
}, {
    selector: "!#video",
    duration: 2000
});

const Effect2 = new VideoPlugin.VideoEffect({
    animatedAttrs: {
        filter: {
            blur: 0,
            sepia: 1
        }
    }
}, {
    selector: "!#video",
    duration: 2000
});

const Effect3 = new VideoPlugin.VideoEffect({
    animatedAttrs: {
        filter: {
            sepia: 0
        }
    }
}, {
    selector: "!#video",
    duration: 2000
});

const Effect4 = new VideoPlugin.VideoEffect({
    animatedAttrs: {
        filter: {
            'hue-rotate': 360
        }
    }
}, {
    selector: "!#video",
    duration: 4000
});

const Effect5 = new VideoPlugin.VideoEffect({
    animatedAttrs: {
        filter: {
            grayscale: 1
        }
    }
}, {
    easing: 'easeInOutBounce',
    selector: "!#video",
    duration: 2000
});

const Effect6 = new VideoPlugin.VideoEffect({
    animatedAttrs: {
        filter: {
            grayscale: 0,
            invert: 1
        }
    }
}, {
    easing: 'easeInOutBack',
    selector: "!#video",
    duration: 8000
});

MyClip.addIncident(VideoClip, 0);
VideoClip.addIncident(Playback1, 500);
VideoClip.addIncident(Effect1, 1000);
VideoClip.addIncident(Effect2, 3000);
VideoClip.addIncident(Effect3, 5000);
VideoClip.addIncident(Effect4, 10000);
VideoClip.addIncident(Effect5, 14000);
VideoClip.addIncident(Effect6, 16000);

new Player({ clip: MyClip });
``


/****** 2 ********/
/****** SELF HOSTED ******/
// const VideoClip = new VideoPlugin.Clip({
//     sources: ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"],
//     startFrom: 50,
//     width: 640,
//     height: 360
// }, {
//     host: document.getElementById("video-container"),
//     id: 'videoClip'
// });

// const Playback1 = new VideoPlugin.Playback({}, {
//     selector: "!#video",
//     duration: 15000
// });

// VideoClip.addIncident(Playback1, 500);

// new Player({ clip: VideoClip });
