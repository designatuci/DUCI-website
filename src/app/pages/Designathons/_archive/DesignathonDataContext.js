import { createContext } from "react";

/**
 * Optional context for season-specific Designathon data (e.g. Designathon 25).
 * When provided, components like Speakers and Splash use this data instead of
 * their default Designathon 24 imports.
 */
export const DesignathonDataContext = createContext(null);
