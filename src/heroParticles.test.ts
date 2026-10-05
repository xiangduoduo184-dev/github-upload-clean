import { describe, expect, it } from 'vitest';
import { heroParticleLines } from './heroParticles';

describe('hero particle title', () => {
  it('keeps the three portfolio title lines in their intended order and palette', () => {
    expect(heroParticleLines).toEqual([
      { text: 'FILM', color: '#f1eee7', highlightColor: '#d3a359' },
      { text: 'AIGC', color: '#ede6dc', highlightColor: '#8f6d42' },
      { text: 'DESIGN', color: '#d3a359', highlightColor: '#f3e6cf' },
    ]);
  });
});
