export type SkinId = 'moonpunk' | 'moonriot' | 'moonzine' | 'moonhalftone' | 'moonglitch' | 'moonsmash' | 'moonink' | 'mooncrash' | 'moonpanel' | 'moonscrawl' | 'moonraw' | 'moonchrome' | 'classic' | 'moonquest' | 'moonledger';
export interface Skin { readonly id: SkinId; readonly name: string; readonly description: string }
export const skins: readonly Skin[];
export const skinIds: readonly SkinId[];
