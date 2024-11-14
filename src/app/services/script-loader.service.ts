import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScriptLoaderService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  loadScript(src: string, defer: boolean = true): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.defer = defer;
    this.renderer.appendChild(document.body, script);
  }
}
