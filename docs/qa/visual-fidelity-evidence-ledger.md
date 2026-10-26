# Visual fidelity reference evidence ledger

Updated 2026-10-26. This is an intake inventory, not visual approval, an import record, or a license grant.

## Four user-provided creative references

Canonical metadata lives in `contracts/moonframe-creative-reference-contract-v0.1.json`. It records SHA-256 values and dimensions as received in the original chat upload inventory:

| ID | Attachment name | Recorded SHA-256 | Dimensions | Repository source bytes | Rights status |
|---|---|---|---|---|---|
| MWX-REF-001 | `image.png` | `31829877f5499480ef8ebbfd2e0b103016917216c3ac70a69d0595b2bf2efa04` | 1672 × 941 | absent | owner-supplied reference; not a reuse license |
| MWX-REF-002 | `image(1).png` | `1de1d94a2d251901503dd7edc5bc42aff77b65251dde6e29fd4b5455b7376167` | 1024 × 576 | absent | owner-supplied reference; not a reuse license |
| MWX-REF-003 | `image(2).png` | `326ebd139769e13da396a2e02f25322a6b8f9b2036d303f0d61fd63b98452dff` | 682 × 1024 | absent | owner-supplied reference; not a reuse license |
| MWX-REF-004 | `image(3).png` | `9d565501a1aa681f1122d666cb01dbdfad4b8fd8dd89f9648b676d652080eb90` | 1024 × 576 | absent | owner-supplied reference; not a reuse license |

A repository scan for `.png`, `.jpg`, `.jpeg`, and `.webp` returned zero files. The four SHA-256 strings are transcribed from canonical contract metadata and structurally have 64 hexadecimal characters; they could not be recomputed against source bytes because those bytes are not present in the repository/workspace. No reference image was imported, redistributed, or treated as production artwork. Pixel review remains blocked until source binaries are supplied and approved for review; matching a digest alone does not establish reuse rights or visual approval.

## Captured Moonframe skin appearances

Capture run: source commit f0cd752f1bd13c61708173c06aa0a8acd2d61115; render-input fingerprint 4d02066f7ce3a12ef578bf9d90971427c361c7c2045cfa79623abc3285daf10d. Fixture: /lab default PropsPlayground (Button / primary / md / Explore Moonframe) plus the fixed Northstar Studio dashboard, five-item workspace navigation, five-row task table and Workspace profile form. Profile: desktop 1440×960, tablet 768×1024 and phone 360×800 CSS px; en-US, LTR, UTC, frozen at 2026-10-25T12:00:00.000Z; document.fonts.ready awaited. Chromium 156.0.8078.4 on Windows; runtime CSS font stack is environment provided and font status loaded. Full-page screenshots have Playwright animations disabled. Every row is machine-captured evidence only; pixels remain pending human visual review.

| Skin | Mode | Fixture / viewport | Screenshot path | PNG SHA-256 | Source commit | Reviewer | Status | Exception |
|---|---|---|---|---|---|---|---|---|
| classic | dark | /lab default / 1440x960 | `artifacts/skins/classic-dark.png` | `bd1e8c016d405aab33d000fbea222d66929837769f6d71614bdba62e7b33dcc6` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| classic | light | /lab default / 1440x960 | `artifacts/skins/classic-light.png` | `62665cbbbaa6a108fb5131bbe8a117487de95b42e1fa9aff8f638aa118c7d77b` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonchrome | dark | /lab default / 1440x960 | `artifacts/skins/moonchrome-dark.png` | `206e664379e8224374ff89a4fd9e1f8a6cc138bcec3dc2cc3f713c6d1b852c86` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonchrome | light | /lab default / 1440x960 | `artifacts/skins/moonchrome-light.png` | `458ab8c6958801fe8a4cc1c68475b0bd25d90668e993bdde9a72241954477cf5` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| mooncrash | dark | /lab default / 1440x960 | `artifacts/skins/mooncrash-dark.png` | `9affbb489f1af99f3a13032ddea2434f60555d696b2abaa984ecc9f0730a0deb` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| mooncrash | light | /lab default / 1440x960 | `artifacts/skins/mooncrash-light.png` | `90861206de5a5305f1748cf80ef3dc39965e21f1abb0030645d904cb90fe2793` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonglitch | dark | /lab default / 1440x960 | `artifacts/skins/moonglitch-dark.png` | `4a90ac85261ed8a4e7e6ebb3d6449eaa99868d464ee938f060f72e25e394b2a3` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonglitch | light | /lab default / 1440x960 | `artifacts/skins/moonglitch-light.png` | `11e5ad28690607c545a72960f78a9a429efea914132ce26e73ac3db2a1011cfd` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonhalftone | dark | /lab default / 1440x960 | `artifacts/skins/moonhalftone-dark.png` | `694b29d108799424c46469f46bd8d6a8fcc829746add066e356ebdb3723c0395` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonhalftone | light | /lab default / 1440x960 | `artifacts/skins/moonhalftone-light.png` | `e5c9746a59034164fbf6f7da832665458da7a8bfd00e2629d7eeaa046247669e` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonink | dark | /lab default / 1440x960 | `artifacts/skins/moonink-dark.png` | `94420a21e8e5622d68a8e907922c2ec11d349e4583749ad6b21c403a6dd609d1` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonink | light | /lab default / 1440x960 | `artifacts/skins/moonink-light.png` | `d03cb1b7706969480a466baf599080153b949f12b0b4d4195524719d926248dd` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonledger | dark | /lab default / 1440x960 | `artifacts/skins/moonledger-dark.png` | `94a636736d138c9f30b3d56ee38fcaaa2c99477cd60ad24c69a7aafcf071889f` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonledger | light | /lab default / 1440x960 | `artifacts/skins/moonledger-light.png` | `a0d53e419deb0a1bb572f88fa6adfb07193c479277ff36bda8f06423fc41f2e9` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpanel | dark | /lab default / 1440x960 | `artifacts/skins/moonpanel-dark.png` | `64bcd1fcc1226123987c726bca8a85fbdf7eebdfeff97b6b10fb9a4e434a0a25` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpanel | light | /lab default / 1440x960 | `artifacts/skins/moonpanel-light.png` | `27bfcf8bc10449afcca56f7915f13c596554dfd3225ccf4d0c3db098360862f7` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpunk | dark | /lab default / 1440x960 | `artifacts/skins/moonpunk-dark.png` | `c068b6c16f1a140512c4ef6350b223df9f546ff80d4010888201b0134c778939` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpunk | light | /lab default / 1440x960 | `artifacts/skins/moonpunk-light.png` | `a2998203bd7b0d6c8f6d3840745b61a77ee554e683f927cc3b87d8acc6bbda04` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonquest | dark | /lab default / 1440x960 | `artifacts/skins/moonquest-dark.png` | `5353204ac4acc8c327888aadfc99069135e1ab19c1ca8e986c7df939e89741ce` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonquest | light | /lab default / 1440x960 | `artifacts/skins/moonquest-light.png` | `db737c7c02f8085c7bb6dd1449821afd352fa50cbd66013f8326e57a9837d05a` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonraw | dark | /lab default / 1440x960 | `artifacts/skins/moonraw-dark.png` | `8b1d97fb0b2c97cd71e0e28fca23e82997887640ae7af0af436182a1b8945601` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonraw | light | /lab default / 1440x960 | `artifacts/skins/moonraw-light.png` | `04644d7832fa12c2d0af9cd8c3f6bc6da6cc6d9067b211b080d3c56af92fc81b` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonriot | dark | /lab default / 1440x960 | `artifacts/skins/moonriot-dark.png` | `5487250ab403393357f9f6ca763581a14c46b9f25052afd05feabc117af6b2f8` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonriot | light | /lab default / 1440x960 | `artifacts/skins/moonriot-light.png` | `dc17bb145ef2345bef041fbf28fc35042613a79adc1f41a40f7e6e165443880f` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonscrawl | dark | /lab default / 1440x960 | `artifacts/skins/moonscrawl-dark.png` | `b2a35a2358f8b934b473ba9c0c7d34a5fcaba612e436e1db642c770ff026e0a6` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonscrawl | light | /lab default / 1440x960 | `artifacts/skins/moonscrawl-light.png` | `4a11d8467acff7686f23d9b308c59806017f0b84163be34c46b03e4647c3601c` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonsmash | dark | /lab default / 1440x960 | `artifacts/skins/moonsmash-dark.png` | `d479b83d9771ef64d74e1307952d281034a7b2c7994ebdeb92c351cd096e1754` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonsmash | light | /lab default / 1440x960 | `artifacts/skins/moonsmash-light.png` | `37e19b2cf085f69362e6924647d25cb8328470b5a2f63f3874683fd3c6d2722c` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonzine | dark | /lab default / 1440x960 | `artifacts/skins/moonzine-dark.png` | `0f022f5cf21a20fbddc6f1dff5b6b0520c77e87ba747aeeccdbcdf9b6e61d267` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonzine | light | /lab default / 1440x960 | `artifacts/skins/moonzine-light.png` | `86a986bbf216a508e595b0e9f8f9192ce65039211f3e9165112dcaae488f1956` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |


## Tablet screenshot captures (MF-VF-018)

Capture run: source commit f0cd752f1bd13c61708173c06aa0a8acd2d61115; render-input fingerprint 4d02066f7ce3a12ef578bf9d90971427c361c7c2045cfa79623abc3285daf10d. Same fixed dashboard, navigation, task table and profile form as desktop, rendered at a real 768×1024 CSS px browser viewport after resizing; checked for horizontal overflow, not resized from desktop. Machine evidence only; human visual review remains pending.

| Skin | Mode | Fixture / viewport | Screenshot path | PNG SHA-256 | Source commit | Reviewer | Status | Exception |
|---|---|---|---|---|---|---|---|---|
| classic | dark | /lab default / 768x1024 | `artifacts/skins/classic-dark-tablet.png` | `6d82ae492ada19ae8efcffd2f55bcdb1cdafa38ee6570ce7e3c0f05fc654dc78` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| classic | light | /lab default / 768x1024 | `artifacts/skins/classic-light-tablet.png` | `40170fd4e95049c73a10cfcdb43baee5b556e7fdf2083c9c34b5a0a76b6554f9` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonchrome | dark | /lab default / 768x1024 | `artifacts/skins/moonchrome-dark-tablet.png` | `4feb2f92c9f7a6a12f1b6c2869a8355bc0e094b79d59c947c4645b0c723efeec` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonchrome | light | /lab default / 768x1024 | `artifacts/skins/moonchrome-light-tablet.png` | `ab5e3d50be0c60528a671c9096ab12d4efdd0f36a59a0ca9b1235662d439e0b1` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| mooncrash | dark | /lab default / 768x1024 | `artifacts/skins/mooncrash-dark-tablet.png` | `832636ad3370551d4f497f72680f5ee796eb22eb0dab720a97a05cc817a5363e` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| mooncrash | light | /lab default / 768x1024 | `artifacts/skins/mooncrash-light-tablet.png` | `731f2e1aba4b7b4a1df16170626457b08957fe7d8957eaac81b5f0922b2a9284` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonglitch | dark | /lab default / 768x1024 | `artifacts/skins/moonglitch-dark-tablet.png` | `74eb9cfbed7db28e09db83acef64f9af07e46e96075c97898b3dec80e837008d` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonglitch | light | /lab default / 768x1024 | `artifacts/skins/moonglitch-light-tablet.png` | `5286410f3dd222fd76a8c1aee501da480ef525be3a00e855a71a1b5dace9b853` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonhalftone | dark | /lab default / 768x1024 | `artifacts/skins/moonhalftone-dark-tablet.png` | `4978dcb9d119331a70ad05ec0e9456844945a1be78a519a79e6a05517d870c45` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonhalftone | light | /lab default / 768x1024 | `artifacts/skins/moonhalftone-light-tablet.png` | `dac79ec17d856876c4ce72f1da0fee4aaf5cea5c42075a2307b3da9604fc3b69` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonink | dark | /lab default / 768x1024 | `artifacts/skins/moonink-dark-tablet.png` | `26c0ff43a267a4241e6533ac57e1fa78b1e4028fb4814f1dc8dce307a282391e` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonink | light | /lab default / 768x1024 | `artifacts/skins/moonink-light-tablet.png` | `8e30545bea53850d7b450d0b49d507e369aa701a510d1f172afc69e60b8066c0` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonledger | dark | /lab default / 768x1024 | `artifacts/skins/moonledger-dark-tablet.png` | `eacb6842468327ca6439e01e82b7d8ed7b494cf0afbc336a1e07de69db58158b` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonledger | light | /lab default / 768x1024 | `artifacts/skins/moonledger-light-tablet.png` | `13e15ae41b42f0170cd0828e0c92cb3739fbef3b81f6c0f6cb037640171311a8` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpanel | dark | /lab default / 768x1024 | `artifacts/skins/moonpanel-dark-tablet.png` | `e200ea7eda1b1b314891670acb3f34860d432fa37ac4f926f0c4cd0169bb6034` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpanel | light | /lab default / 768x1024 | `artifacts/skins/moonpanel-light-tablet.png` | `2127a9fde0787ed2c590ba05a278b0b9a5e7d4fa35d4bbdf8cb51f358a7c4941` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpunk | dark | /lab default / 768x1024 | `artifacts/skins/moonpunk-dark-tablet.png` | `5c4649cb8fe75465c63d780c36c4f80354585c19b33c45ef0e1afe73248bb2c9` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpunk | light | /lab default / 768x1024 | `artifacts/skins/moonpunk-light-tablet.png` | `d9ca1a9a18cd9af548adcadd3981f7c6aa8c270dc83bf3d2c20ced4e0644e945` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonquest | dark | /lab default / 768x1024 | `artifacts/skins/moonquest-dark-tablet.png` | `f9621329c8a7fd7eb0a30fb0d6d40ba3ca5fc580977233ef877459a271acccb9` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonquest | light | /lab default / 768x1024 | `artifacts/skins/moonquest-light-tablet.png` | `adbba57f290f436151451aaa2cec176b730438565b9c071a8d8579b4515ed879` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonraw | dark | /lab default / 768x1024 | `artifacts/skins/moonraw-dark-tablet.png` | `1c9c5174554f625d37d63a82aac25c5f2cc89beb3e841feb741d5178c2bd2e7d` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonraw | light | /lab default / 768x1024 | `artifacts/skins/moonraw-light-tablet.png` | `1f935cbc2d708daca1e957561e54fa56dcaf4ea20ec70a6b4ad18a81bb170f01` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonriot | dark | /lab default / 768x1024 | `artifacts/skins/moonriot-dark-tablet.png` | `9c878e5e77569c013a29c682d4d03f6f8dec331d6ba766b0d413d0eb7e67f7df` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonriot | light | /lab default / 768x1024 | `artifacts/skins/moonriot-light-tablet.png` | `b0b9511b5c30bf84835d29aaa326d3d3e391ff80a505372cb93a910f1c19fb00` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonscrawl | dark | /lab default / 768x1024 | `artifacts/skins/moonscrawl-dark-tablet.png` | `3e6fd50df7783a9cdc9b8f68aad013867b8a35f880cf9fa7e41910daa2c3cbbd` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonscrawl | light | /lab default / 768x1024 | `artifacts/skins/moonscrawl-light-tablet.png` | `9e1d5da89fce931e39cc251fe3f2e257558029e210607d2d27f6b9b241e9df09` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonsmash | dark | /lab default / 768x1024 | `artifacts/skins/moonsmash-dark-tablet.png` | `b09fbeb9826829b1e1d8f6b717ecceebe59d292730d342feeb3beed83b73806d` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonsmash | light | /lab default / 768x1024 | `artifacts/skins/moonsmash-light-tablet.png` | `d68695ecfa78a47e35d2f99e58a4c9d2826925d108889dc36eb9baefef2d22ed` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonzine | dark | /lab default / 768x1024 | `artifacts/skins/moonzine-dark-tablet.png` | `eeda54f5ee5f3316e323728c92def6e9f93a568c36e598ddb79587921e4dcab7` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonzine | light | /lab default / 768x1024 | `artifacts/skins/moonzine-light-tablet.png` | `f42821aa800859c5d4058fc73486f440514cf0ceea367d45c1a42951e0e6efe5` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |


## Phone screenshot captures (MF-VF-019)

Capture run: source commit f0cd752f1bd13c61708173c06aa0a8acd2d61115; render-input fingerprint 4d02066f7ce3a12ef578bf9d90971427c361c7c2045cfa79623abc3285daf10d. Same fixed dashboard, navigation, task table and profile form as desktop, rendered at a real 360×800 CSS px browser viewport; checked for horizontal overflow, not resized from desktop. Machine evidence only; human visual review remains pending.

| Skin | Mode | Fixture / viewport | Screenshot path | PNG SHA-256 | Source commit | Reviewer | Status | Exception |
|---|---|---|---|---|---|---|---|---|
| classic | dark | /lab default / 360x800 | `artifacts/skins/classic-dark-phone.png` | `db044b94df77f7ce4b91ac5b958a9baa770c257e502b29927bf7194f8e350e68` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| classic | light | /lab default / 360x800 | `artifacts/skins/classic-light-phone.png` | `5c219197ec052d702b3b3f3f386b68b6e5107ea13d48053ed6459bcb09695025` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonchrome | dark | /lab default / 360x800 | `artifacts/skins/moonchrome-dark-phone.png` | `28b74d0f60739eb9c1a4c0bb1b37baf2359a0dfe67761f810d94d1d6316d2140` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonchrome | light | /lab default / 360x800 | `artifacts/skins/moonchrome-light-phone.png` | `62a44b764e668f96d0077697ccda4a20128f4fbba8fd3594b3e404b5682edb46` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| mooncrash | dark | /lab default / 360x800 | `artifacts/skins/mooncrash-dark-phone.png` | `5ef70880bb84ee5e41cc1092ac8e6be0d0ebba11fc2a16e2d6093d42d3a56bee` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| mooncrash | light | /lab default / 360x800 | `artifacts/skins/mooncrash-light-phone.png` | `b38fbc54bf333537ef68467739e8386ff3a5a22a4a5fe906f43e6498b4e26057` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonglitch | dark | /lab default / 360x800 | `artifacts/skins/moonglitch-dark-phone.png` | `b9b766c37bf45af5800e903873d54e01a153eb8774d133fd6fce11af4cb7154c` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonglitch | light | /lab default / 360x800 | `artifacts/skins/moonglitch-light-phone.png` | `024678ab3ae5c593d3e036aaec7d347d157c7a2bd16e9a71ce614b02b4774068` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonhalftone | dark | /lab default / 360x800 | `artifacts/skins/moonhalftone-dark-phone.png` | `f21ce951157ec91e1a1e708bb735cdcd0c74d46fdc80cbd65b3876544995ab7d` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonhalftone | light | /lab default / 360x800 | `artifacts/skins/moonhalftone-light-phone.png` | `30abb3f3562157e070e2a646882fdda089d9e7be36c1fd991cf917efce06735c` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonink | dark | /lab default / 360x800 | `artifacts/skins/moonink-dark-phone.png` | `51ca6046806f241f386d28a42dc0c72e0593f4904acfac2f0ce0ab94ee39232b` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonink | light | /lab default / 360x800 | `artifacts/skins/moonink-light-phone.png` | `7a48272380359aa9a24faff77ea487206005e19e9b67a306c6821bf3de9c9e8d` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonledger | dark | /lab default / 360x800 | `artifacts/skins/moonledger-dark-phone.png` | `5e8ddd2331d07bc2a9d0c6a9f53b7f14b4fd0386b924f3d366b0e0d4cdf7502d` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonledger | light | /lab default / 360x800 | `artifacts/skins/moonledger-light-phone.png` | `f7a03e1b66ca7370a5737f2a8fb39e7754ae4f957e558ef566595c91db0251c8` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpanel | dark | /lab default / 360x800 | `artifacts/skins/moonpanel-dark-phone.png` | `943b8043ed2e08a91ead30ee65e8c91a82fec5f22a56c5980d319368182677e9` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpanel | light | /lab default / 360x800 | `artifacts/skins/moonpanel-light-phone.png` | `3cbbf7729114a9e57058e47f93aa7c8792bda2b9c8171916d8badc8b1c7cefa5` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpunk | dark | /lab default / 360x800 | `artifacts/skins/moonpunk-dark-phone.png` | `2794e52a11e33da813cc2686b69eb39490ec25e05e93eab7043dc7755d939139` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonpunk | light | /lab default / 360x800 | `artifacts/skins/moonpunk-light-phone.png` | `fe526ae9893430b1ef94a2ba2bfb4c75be4acab20e8e26a25af515aa5da3f374` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonquest | dark | /lab default / 360x800 | `artifacts/skins/moonquest-dark-phone.png` | `715a9161f4a5a54d35962a2b3740e7e0ad7b36755704eeb2e42129504d5dfb03` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonquest | light | /lab default / 360x800 | `artifacts/skins/moonquest-light-phone.png` | `361e2c463e7357a1ff5feb28f9633c34136cf93c9e9e6670282f35cb3a112bc9` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonraw | dark | /lab default / 360x800 | `artifacts/skins/moonraw-dark-phone.png` | `22fef0c00cf51df37efc932e14901dd54208aa3df2a9143e68c7db5133380801` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonraw | light | /lab default / 360x800 | `artifacts/skins/moonraw-light-phone.png` | `054378b126657403551ac6072c4b779c1cf0384fe8cdb261da568756debc4e46` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonriot | dark | /lab default / 360x800 | `artifacts/skins/moonriot-dark-phone.png` | `a8dfde4861c209345c143132b961d7a967167acedaab46f7a9b7f199df8e3840` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonriot | light | /lab default / 360x800 | `artifacts/skins/moonriot-light-phone.png` | `15d5c5fbef36047f2c49fb74c4c70b360d05b3d391b3a03959c0b4a11e7813d3` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonscrawl | dark | /lab default / 360x800 | `artifacts/skins/moonscrawl-dark-phone.png` | `54ea9b4432bd551341bd9b1835be7729e50a655666b805decc89fb9fadebd85b` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonscrawl | light | /lab default / 360x800 | `artifacts/skins/moonscrawl-light-phone.png` | `c12986364b28d5c9c8ac8ce9b05f671389f138700cc1179c03438576117af518` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonsmash | dark | /lab default / 360x800 | `artifacts/skins/moonsmash-dark-phone.png` | `32a4cea51a0d0bfb55dfa6aca1163f60c138502b1ba04ca216c15cc0cf3f7875` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonsmash | light | /lab default / 360x800 | `artifacts/skins/moonsmash-light-phone.png` | `a10b09538e2b91044928b539c39b2c9d77ffb98f6c9f6e2000d2fe227b071f72` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonzine | dark | /lab default / 360x800 | `artifacts/skins/moonzine-dark-phone.png` | `f148b61aead36ffb9bff108a29efafe7eb9ecda9ff14cd2c21dfd66a52fadbe7` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |
| moonzine | light | /lab default / 360x800 | `artifacts/skins/moonzine-light-phone.png` | `4a8d25763de191431f5051733203cf378a341ca43267b4fb94163a776b9996ca` | `f0cd752f1bd13c61708173c06aa0a8acd2d61115` | pending | captured-structural | Pixel/human visual review pending |

Verification at capture SHA f0cd752f1bd13c61708173c06aa0a8acd2d61115: pnpm run test:browser — 55/55 passed; pnpm test — 13/13 passed; pnpm run typecheck — passed; pnpm run audit:pairs — 30/30 each for desktop, tablet and phone capture provenance. Navigation order/current state and restoration, form states, and phone overflow were asserted across all 30 skin/mode combinations. A separate deterministic open-dialog capture is indexed below. All screenshots remain pending human visual review.

## Deterministic dialog capture (MF-VF-023)

- `/lab/behavior?fixture=archive-task` opens the T-1045 archive dialog with the canonical title/body and both actions visible. The browser test verifies Escape, opening from the row action, focus return, and the Keep task action.
- Capture: [`artifacts/skins/archive-task-dialog.png`](../../artifacts/skins/archive-task-dialog.png) · PNG SHA-256 `8aacb2ccf92282c16f293df81a4df3cefd95500074a0495493ecfb99b4837408` · source commit `32281f6e2200602b791b9d9355ab7ba3fc19f845` · fingerprint `46db44efe166b0c3330fa6c1140644304645ade556e59e3977d8fafa33d95bd4` · 1440×960 · Chromium 156.0.8078.4 · en-US · LTR · UTC · frozen at `2026-10-25T12:00:00.000Z`.
- Status: machine-captured structural evidence; reviewer pending. Screenshot is not visual approval.

## MF-VF-024 — Common workspace navigation

- The shared fixture navigation is named `Workspace sections` and presents Overview, Projects, Tasks, Reports, Settings in that order. Overview is selected by default; the browser test changes to Reports then restores Overview before each capture.
- `pnpm run test:browser` — 55/55 passed with these navigation assertions in all 15 skins × 2 modes. Desktop/tablet/phone screenshots were refreshed to source commit `f0cd752f1bd13c61708173c06aa0a8acd2d61115`; all 90 provenance records match current source and PNG hashes. Human visual review remains pending.


## MF-VF-017 — Pin desktop screenshot layout

- Source commit: `ac5df6cccb2b19f5d99185458b7cd6b52e7b1e41`.
- Fixed Playwright desktop viewport to 1440×960, locale to `en-US`, timezone to UTC, and browser time to `2026-10-25T12:00:00.000Z`. Captures wait for document fonts and write current browser version, user agent, font stack/load status, fixture description, locale, direction, viewport and time into each provenance sidecar.
- `pnpm test` — 13/13 passed. `pnpm run typecheck` — passed. `pnpm run build` — passed; 88 routes generated. `pnpm run test:browser` — 54/54 passed. `pnpm run audit:pairs` — 30/30 current-source captures verified; human visual review remains pending. `node scripts/validate-contracts.mjs` and `node scripts/verify-m13-handoff.mjs` — passed; existing generic SFX playback-truth and missing-LICENSE warnings remain. `git diff --check` — passed.
- Font rendering remains environment-provided; no bundled production font or cross-OS pixel identity is claimed. Rollback: revert commit `ac5df6cccb2b19f5d99185458b7cd6b52e7b1e41`.
## MF-VF-019 — Pin phone screenshot layout 360x800

- Phone-profile and focus-bound implementation commits: `7f78909625c7f8a227338a8e96f987e5f4e9f600` and `49cfac474c4de0bbb6bf75bc9472ae4a98235788`; latest capture refresh including dashboard, navigation, task table, profile form and dialog fixture: `f0cd752f1bd13c61708173c06aa0a8acd2d61115`.
- Added actual 360×800 browser screenshots for all 15 skins in light and dark mode, with viewport assertion and no-horizontal-overflow check; each PNG has a source fingerprint and image SHA-256 sidecar. The 30 phone rows are indexed above.
- `pnpm run test:browser` — 54/54 passed. `pnpm run audit:pairs` — 30/30 desktop, 30/30 tablet, and 30/30 phone captures match their source fingerprint and PNG digest. Contract and M13 handoff validators passed; existing SFX playback-truth and missing-LICENSE warnings remain. Human visual review remains pending.
- Rollback: revert commit `70d1598eb5c0e8db2b8c6bef636c6efe01405dff`.
## MF-VF-020 — Add same-data dashboard specimen

- Implementation commit: `70d1598eb5c0e8db2b8c6bef636c6efe01405dff`.
- Added the fixed Northstar Studio dashboard to `/lab`: Overview heading, Northstar Studio name, Sunday October 25 2026 date, KPIs (Open tasks 12; In progress 4; Completed this week 18), five activity entries, visible textual statuses and the exact long-copy probe. Browser assertions check these values under every skin and mode.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed, 88 routes; `pnpm run test:browser` — 54/54 passed; `pnpm run audit:pairs` — 105 pair records and 30/30 current-source captures at each of 1440×960, 768×1024 and 360×800; contract and M13 handoff validators passed with existing SFX playback-truth and missing-LICENSE warnings. No human visual approval claimed.
- Rollback: revert commit `70d1598eb5c0e8db2b8c6bef636c6efe01405dff`.

## MF-VF-021 — Add same-data table specimen

- Implementation commit: `701d5aea3c1147e844a183da5a5036f84cee7db4`.
- Added five fixed Northstar Studio task rows with semantic columns for task, owner, status, due date and estimate. Search and stable due-date/task-name sorting are local fixture state; the browser asserts exact rows and controls for all 15 skins in both modes.
- Fixed existing browser assertions to scope project rows and dashboard activity after adding the second table and repeated task names.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed, 88 routes; `pnpm run test:browser` — 54/54 passed; `pnpm run audit:pairs` — 105 pair records plus 30/30 each desktop, tablet and phone captures with current source and PNG provenance. Contract and M13 handoff validators passed with existing generic SFX playback-truth and missing-LICENSE warnings. Human visual review remains pending.
- Rollback: revert commit `701d5aea3c1147e844a183da5a5036f84cee7db4`.

## MF-VF-022 — Add same-data form specimen

- Implementation commit: `c68f93ff648d07d73c679b49a280419830ac536e`.
- Added a fixed Workspace profile form with the exact six-field fixture values, visible UTC label, helper copy, URL error connected through `aria-describedby`, and local pending/success feedback. Cancel restores the original fixture values; no backend submission occurs.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed, 88 routes; `pnpm run test:browser` — 54/54 passed, including assertions across all 15 skins × 2 modes; `pnpm run audit:pairs` — 30/30 desktop, tablet and phone captures after refresh. Contract and handoff validators passed; human visual review remains pending.
- Rollback: revert commit `c68f93ff648d07d73c679b49a280419830ac536e`.
