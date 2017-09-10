import { CompetitionsModule } from './competitions.module';

describe('CompetitionsModule', () => {
  let competitionsModule: CompetitionsModule;

  beforeEach(() => {
    competitionsModule = new CompetitionsModule();
  });

  it('should create an instance', () => {
    expect(competitionsModule).toBeTruthy();
  });
});
