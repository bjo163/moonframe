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
