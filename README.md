# Phone Mockup Studio

Drop a screenshot onto a photorealistic 3D iPhone, rotate it to any angle, and export a transparent PNG — right in your browser. No signup, no watermark, no build step.

**▶ Live app: https://quentin-pla.github.io/phone-mockup-studio/**

## Features

- **Import a screenshot** — it maps straight onto the phone's screen, edge to edge.
- **Pick a model** — iPhone 15 Pro Max, 17 Pro Max, or 17 Pro.
- **Rotate freely** in 3D, or snap to one-click ad-angle presets (front, back, hero angles).
- **Export a transparent PNG** ready for landing pages, App Store shots, or ads.
- **Save to Photos on iOS** via the native share sheet.
- **Works offline** once loaded — pure client-side Three.js.

## Usage

Open the [live app](https://quentin-pla.github.io/phone-mockup-studio/), choose a model, import your screenshot, frame the shot, and hit export.

### Run locally

Because the app fetches `.glb` models over HTTP, it needs a local server (opening the file directly with `file://` won't load the models):

```bash
git clone https://github.com/quentin-pla/phone-mockup-studio.git
cd phone-mockup-studio
python3 -m http.server 8777
# open http://localhost:8777
```

## Built with

- [Three.js](https://threejs.org/) — WebGL rendering, `GLTFLoader`, `OrbitControls`, image-based lighting.

## License

[MIT](LICENSE) © Quentin PLA

---

*Not affiliated with or endorsed by Apple Inc. "iPhone" is a trademark of Apple Inc., used here only to describe the device models depicted.*
