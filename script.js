class EventTarget {
  constructor() {
    this.listeners = new Map(); // Proper Map initialization
  }

  addEventListener(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    const callbacks = this.listeners.get(event);

    if (!callbacks.includes(callback)) {
      callbacks.push(callback);
    }
  }

  removeEventListener(event, callback) {
    if (!this.listeners.has(event)) return;

    const callbacks = this.listeners.get(event);
    const filtered = callbacks.filter(cb => cb !== callback);
    this.listeners.set(event, filtered);
  }

  dispatchEvent(event) {
    if (!this.listeners.has(event)) return;

    const callbacks = this.listeners.get(event);
    for (const cb of callbacks) {
      cb();
    }
  }
}
