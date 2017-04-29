export class PlatformService {
  public get isMobileWeb(): boolean {
    // 768 is an Bootstrap 4 sm breakpoint.
    return window.innerWidth <= 768;
  }
}
