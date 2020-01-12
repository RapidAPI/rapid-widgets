import { ApiFactory } from "./types";

// export const createTestApi = <T = any>(apiFactory: ApiFactory<T>, defaultValue: T) => {
//     let state = defaultValue;
//     let setState = (updater: T) => {
//         if (typeof updater === "function") {
//             state = updater(state);
//         } else {
//             state = updater;
//         }
//         ref.api = apiFactory({ state, setState });
//     };
//     let ref = {
//         api: apiFactory({ state, setState })
//     };
//     return ref;
// };