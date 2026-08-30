/**
 * Settlement Rails — Static Configuration
 *
 * This data structure defines the settlement rails that AEGIS supports
 * or is developing. It is intentionally static for now — no fake backend
 * or simulated functionality is attached.
 *
 * Architecture is designed so that future integrations can connect to
 * the actual AEGIS backend without requiring a major frontend redesign.
 *
 * Interface boundary (conceptual):
 *
 *   AEGIS
 *     |
 *   Smart Router
 *     |
 *     +-- BNB Provider           (live)
 *     +-- Stellar Provider       (integration_in_progress)
 *     +-- Circle Arc / USDC Provider (planned)
 *     +-- Future Payment Provider (planned)
 */

export type RailStatus = 'live' | 'integration_in_progress' | 'planned';

export interface SettlementRail {
  name: string;
  shortName: string;
  status: RailStatus;
  statusLabel: string;
  description: string;
}

export const settlementRails: SettlementRail[] = [
  {
    name: 'BNB Smart Chain',
    shortName: 'BNB',
    status: 'live',
    statusLabel: 'Live',
    description: 'Current production settlement environment. AEGIS routes supported digital-asset transfers and settlement through BNB Smart Chain.',
  },
  {
    name: 'Stellar',
    shortName: 'Stellar',
    status: 'integration_in_progress',
    statusLabel: 'Integration in progress',
    description: 'AEGIS is being expanded to support Stellar as an additional settlement and payment rail, with an initial focus on stablecoin and payment infrastructure.',
  },
  {
    name: 'Circle Arc / USDC',
    shortName: 'Circle Arc',
    status: 'planned',
    statusLabel: 'Planned',
    description: 'A regulated digital-dollar settlement and liquidity rail. Architecture-defined in AEGIS v3 as a hybrid-path and automatic-failover option alongside BNB Smart Chain and Stellar — not yet a live production flow.',
  },
  {
    name: 'Additional Payment Rails',
    shortName: 'Future',
    status: 'planned',
    statusLabel: 'Planned',
    description: 'Future payment and settlement rail integrations to expand AEGIS multi-rail architecture.',
  },
];
