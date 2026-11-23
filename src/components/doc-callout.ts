import { 
  LitElement, 
  html, 
  css 
} from 'lit';

export class DocCallout extends LitElement {
  static properties = {
    type: { 
      type: String, 
      reflect: true
    },
    _dismissed: { 
      state: true
    },
  };

  static styles = css`
    :host { 
      display: block; 
      margin: 1rem 0; 
    }
      
    .box {
      display: flex; 
      justify-content: space-between; 
      gap: 1rem;
      padding: 0.75rem 1rem;
      border-left: 4px solid var(--callout-accent, #2563eb);
      background: var(--callout-bg, #eff6ff);
      color: #111;
    }

    :host([type='warning']) .box {
      --callout-accent: #b45309;
      --callout-bg: #fffbeb;
    }

    button { 
      align-self: flex-start; 
      cursor: pointer;
    }
  `;

  declare type: 'note' | 'warning';
  declare _dismissed: boolean;

  constructor() {
    super();
    this.type = 'note';
    this._dismissed = false;
  }

  private _dismiss() {
    this._dismissed = true;
    this.dispatchEvent(new CustomEvent('dismissed', { 
      bubbles: true, composed: true 
    }));
  }

  render() {
    if (this._dismissed) {
      return html``;
    }
    
    const label = this.type === 'warning' ? 'Warning' : 'Note';

    return html`
      <div class="box" part="box" role="note" aria-label=${label}>
        <div><strong>${label}:</strong> 
          <slot></slot>
        </div>
        
        <button type="button" @click=${this._dismiss}>Dismiss</button>
      </div>
    `;
  }
}

if (!customElements.get('doc-callout')) {
  customElements.define('doc-callout', DocCallout);
}