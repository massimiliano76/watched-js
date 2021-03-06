import { IptvItem, PlayableItem, Source, Subtitle } from "@watchedcom/sdk";

export const EXAMPLE_ITEMS: PlayableItem[] = [
  {
    type: "movie",
    ids: {
      "watched-worker-example": "id1234",
    },
    name: "Example Item 1",
    description: "This item does not have any sources.",
    year: 2011, // Example years to demonstrate the sort feature
  },
  {
    type: "movie",
    ids: {
      "watched-worker-example": "id1235",
    },
    name: "Big Buck Bunny",
    year: 2013,
  },
  {
    type: "movie",
    ids: {
      "watched-worker-example": "elephant",
    },
    name: "Elephants Dream",
    description: "Dream of elephants?",
    year: 2012,
  },
  {
    type: "movie",
    ids: {
      "watched-worker-example": "4ktest",
    },
    name: "4k Test",
    description: "Test video with 4k resolution",
    year: 2012,
  },
];

type ExampleSources = {
  [k: string]: Source[];
};

// Export needed for tests
export const EXAMPLE_SOURCES: ExampleSources = {
  id1235: [
    {
      type: "url",
      id: "",
      name: "Source 1",
      url:
        "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4",
    },
  ],
  elephant: [
    {
      type: "url",
      name: "mp4",
      url:
        "https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4",
    },
    {
      type: "url",
      name: "webm",
      url:
        "https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.webm",
    },
  ],
  "4ktest": [
    {
      type: "url",
      name: "hls",
      url:
        "https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8",
    },
  ],
};

type ExampleSubtitle = {
  [k: string]: Subtitle[];
};

// Export needed for tests
export const EXAMPLE_SUBTITLES: ExampleSubtitle = {
  elephant: [
    {
      id: "vtt",
      name: "VTT",
      language: "en",
      type: "vtt",
      url:
        "https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt",
    },
    {
      id: "ttml",
      name: "TTML",
      language: "en",
      type: "ttml",
      url:
        "https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.ttml",
    },
  ],
};

export const EXAMPLE_IPTV_ITEMS: IptvItem[] = [
  {
    type: "iptv",
    ids: {},
    name: "Not really a livestream",
    group: "Example!",
    url:
      "https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8",
  },
];
