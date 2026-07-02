class HeroGlobe {
  constructor() {
    this.canvas = document.getElementById('heroCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.mouse = { x: 0, y: 0 };
    this.rotation = 0;
    this.time = 0;
    this.dots = [];
    this.routes = [];
    this.cargoDots = [];

    this.cities = [
      { name: 'Buenos Aires', lat: -34.6, lng: -58.4, size: 3 },
      { name: 'New York', lat: 40.7, lng: -74.0, size: 3.5 },
      { name: 'Shanghai', lat: 31.2, lng: 121.5, size: 3.5 },
      { name: 'Rotterdam', lat: 51.9, lng: 4.5, size: 3 },
      { name: 'Santos', lat: -23.9, lng: -46.3, size: 2.5 },
      { name: 'Singapore', lat: 1.3, lng: 103.8, size: 3 },
      { name: 'Dubai', lat: 25.2, lng: 55.3, size: 2.5 },
      { name: 'Miami', lat: 25.8, lng: -80.2, size: 2.5 },
      { name: 'Panama', lat: 9.0, lng: -79.5, size: 2 },
      { name: 'Valparaiso', lat: -33.0, lng: -71.6, size: 2 },
      { name: 'Tokyo', lat: 35.7, lng: 139.8, size: 3 },
      { name: 'Hamburg', lat: 53.6, lng: 10.0, size: 2.5 },
      { name: 'Barcelona', lat: 41.4, lng: 2.2, size: 2 },
      { name: 'Lisbon', lat: 38.7, lng: -9.1, size: 2 },
      { name: 'Cape Town', lat: -33.9, lng: 18.4, size: 2.5 },
    ];

    this.routePairs = [
      [0, 1], [0, 3], [0, 7], [1, 2], [1, 3], [1, 4],
      [2, 5], [2, 10], [3, 11], [5, 6], [6, 2],
      [4, 0], [7, 4], [8, 0], [9, 0], [10, 5],
      [11, 3], [12, 3], [13, 0], [14, 3], [14, 0],
      [1, 5], [2, 6], [5, 10], [7, 1]
    ];

    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.onMouse(e));
    window.addEventListener('touchmove', (e) => this.onTouch(e), { passive: true });

    this.generateCargo();
  }

  resize() {
    const hero = document.getElementById('home');
    const rect = hero.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio;
    this.canvas.height = rect.height * window.devicePixelRatio;
    this.canvas.style.width = rect.width + 'px';
    this.canvas.style.height = rect.height + 'px';
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    this.w = rect.width;
    this.h = rect.height;
    this.centerX = this.w / 2;
    this.centerY = this.h * 0.85;
    this.radius = Math.min(this.w, this.h) * 0.5;
  }

  onMouse(e) {
    this.mouse.x = (e.clientX / this.w - 0.5) * 2;
    this.mouse.y = (e.clientY / this.h - 0.5) * 2;
  }

  onTouch(e) {
    if (e.touches[0]) {
      const t = e.touches[0];
      this.mouse.x = (t.clientX / this.w - 0.5) * 2;
      this.mouse.y = (t.clientY / this.h - 0.5) * 2;
    }
  }

  latLngTo3D(lat, lng, r) {
    const phi = (90 - lat) * Math.PI / 180;
    const theta = lng * Math.PI / 180;
    return {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.cos(phi),
      z: r * Math.sin(phi) * Math.sin(theta)
    };
  }

  rotateY(p, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
      x: p.x * cos + p.z * sin,
      y: p.y,
      z: -p.x * sin + p.z * cos
    };
  }

  project(p) {
    return {
      x: this.centerX + p.x,
      y: this.centerY + p.y,
      z: p.z
    };
  }

  generateCargo() {
    this.cargoDots = [];
    for (let i = 0; i < this.routePairs.length * 2; i++) {
      const pair = this.routePairs[i % this.routePairs.length];
      this.cargoDots.push({
        from: pair[0],
        to: pair[1],
        progress: Math.random(),
        speed: 0.001 + Math.random() * 0.002,
        delay: Math.random() * 1000
      });
    }
  }

  drawGrid() {
    const ctx = this.ctx;
    const R = this.radius;
    const lines = 8;

    ctx.strokeStyle = `rgba(0, 119, 204, ${0.08 + (document.body.classList.contains('light-mode') ? 0.08 : 0)})`;
    ctx.lineWidth = 0.8;

    for (let i = 0; i <= lines; i++) {
      const lat = -80 + (160 * i / lines);
      const pts = [];
      for (let j = 0; j <= 36; j++) {
        const lng = -180 + (360 * j / 36);
        const p3d = this.latLngTo3D(lat, lng, R);
        const rot = this.rotateY(p3d, this.rotation);
        const p = this.project(rot);
        if (p.z > -R * 0.15) pts.push(p);
      }
      if (pts.length > 1) {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let k = 1; k < pts.length; k++) ctx.lineTo(pts[k].x, pts[k].y);
        ctx.stroke();
      }
    }

    for (let i = 0; i <= 18; i++) {
      const lng = -180 + (360 * i / 18);
      const pts = [];
      for (let j = 0; j <= 36; j++) {
        const lat = -90 + (180 * j / 36);
        const p3d = this.latLngTo3D(lat, lng, R);
        const rot = this.rotateY(p3d, this.rotation);
        const p = this.project(rot);
        if (p.z > -R * 0.15) pts.push(p);
      }
      if (pts.length > 1) {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let k = 1; k < pts.length; k++) ctx.lineTo(pts[k].x, pts[k].y);
        ctx.stroke();
      }
    }
  }

  drawGlobeOutline() {
    const ctx = this.ctx;
    const R = this.radius;
    const gradient = ctx.createRadialGradient(
      this.centerX, this.centerY, R * 0.8,
      this.centerX, this.centerY, R
    );
    gradient.addColorStop(0, 'rgba(0, 119, 204, 0)');
    gradient.addColorStop(0.7, 'rgba(0, 119, 204, 0.02)');
    gradient.addColorStop(0.95, 'rgba(0, 119, 204, 0.06)');
    gradient.addColorStop(1, 'rgba(0, 119, 204, 0.15)');

    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, R, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, R, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0, 119, 204, ${0.15 + (document.body.classList.contains('light-mode') ? 0.1 : 0)})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  drawCities() {
    const ctx = this.ctx;
    const R = this.radius;
    const pulse = Math.sin(this.time * 2) * 0.3 + 0.7;

    this.cities.forEach((city, idx) => {
      const p3d = this.latLngTo3D(city.lat, city.lng, R);
      const rot = this.rotateY(p3d, this.rotation);
      const p = this.project(rot);

      if (p.z < -R * 0.15) return;

      const alpha = (p.z + R) / (2 * R);
      const size = city.size * (0.5 + alpha * 0.5);

      ctx.beginPath();
      ctx.arc(p.x, p.y, size * pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 153, 255, ${0.5 * alpha})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 153, 255, ${0.1 * alpha * pulse})`;
      ctx.fill();
    });
  }

  drawRoutes() {
    const ctx = this.ctx;
    const R = this.radius;

    this.routePairs.forEach((pair, idx) => {
      const from = this.cities[pair[0]];
      const to = this.cities[pair[1]];
      if (!from || !to) return;

      const p1 = this.latLngTo3D(from.lat, from.lng, R);
      const p2 = this.latLngTo3D(to.lat, to.lng, R);
      const r1 = this.rotateY(p1, this.rotation);
      const r2 = this.rotateY(p2, this.rotation);
      const pr1 = this.project(r1);
      const pr2 = this.project(r2);

      if (r1.z < -R * 0.15 && r2.z < -R * 0.15) return;

      const zAvg = (r1.z + r2.z) / 2;
      const alpha = (zAvg + R) / (2 * R);
      if (alpha < 0.05) return;

      const midLat = (from.lat + to.lat) / 2;
      const midLng = (from.lng + to.lng) / 2;
      const midP3D = this.latLngTo3D(midLat, midLng, R * 1.25);
      const midRot = this.rotateY(midP3D, this.rotation);
      const midP = this.project(midRot);

      ctx.beginPath();
      ctx.moveTo(pr1.x, pr1.y);
      ctx.quadraticCurveTo(midP.x, midP.y, pr2.x, pr2.y);
      ctx.strokeStyle = `rgba(0, 119, 204, ${0.06 * alpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  }

  drawMovingCargo() {
    const ctx = this.ctx;
    const R = this.radius;

    this.cargoDots.forEach((cargo) => {
      const from = this.cities[cargo.from];
      const to = this.cities[cargo.to];
      if (!from || !to) return;

      cargo.progress += cargo.speed;
      if (cargo.progress > 1) cargo.progress = 0;

      const t = cargo.progress;

      const p1 = this.latLngTo3D(from.lat, from.lng, R);
      const p2 = this.latLngTo3D(to.lat, to.lng, R);
      const r1 = this.rotateY(p1, this.rotation);
      const r2 = this.rotateY(p2, this.rotation);
      const pr1 = this.project(r1);
      const pr2 = this.project(r2);

      const midLat = (from.lat + to.lat) / 2;
      const midLng = (from.lng + to.lng) / 2;
      const midP3D = this.latLngTo3D(midLat, midLng, R * 1.25);
      const midRot = this.rotateY(midP3D, this.rotation);
      const midP = this.project(midRot);

      const t1 = 1 - t;
      const pos = {
        x: t1 * t1 * pr1.x + 2 * t1 * t * midP.x + t * t * pr2.x,
        y: t1 * t1 * pr1.y + 2 * t1 * t * midP.y + t * t * pr2.y
      };

      const zAvg = (r1.z + r2.z) / 2;
      const alpha = (zAvg + R) / (2 * R);
      if (alpha < 0.05) return;

      const size = 2 + t * 2;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 153, 255, ${0.7 * alpha})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 153, 255, ${0.15 * alpha})`;
      ctx.fill();
    });
  }

  drawParticles() {
    const ctx = this.ctx;
    const count = 40;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + this.time * 0.05;
      const dist = this.radius * (1.8 + Math.sin(this.time * 0.03 + i) * 0.4);
      const x = this.centerX + Math.cos(angle) * dist;
      const y = this.centerY + Math.sin(angle) * dist;
      const size = 1 + Math.sin(this.time * 0.05 + i * 0.5) * 0.5;

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 119, 204, ${0.2 + Math.sin(this.time * 0.05 + i) * 0.1})`;
      ctx.fill();
    }
  }

  drawConnectingLines() {
    const ctx = this.ctx;
    const count = 12;
    const R = this.radius;

    for (let i = 0; i < count; i++) {
      const a1 = (i / count) * Math.PI * 2;
      const a2 = ((i + 3) / count) * Math.PI * 2;
      const outerR = R * 1.6;

      const x1 = this.centerX + Math.cos(a1 + this.time * 0.02) * outerR;
      const y1 = this.centerY + Math.sin(a1 + this.time * 0.02) * outerR;
      const x2 = this.centerX + Math.cos(a2 + this.time * 0.02) * outerR;
      const y2 = this.centerY + Math.sin(a2 + this.time * 0.02) * outerR;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(0, 119, 204, ${0.03 + Math.sin(this.time * 0.03 + i) * 0.02})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
  }

  animate() {
    const hero = document.getElementById('home');
    if (!hero || hero.style.display === 'none') {
      requestAnimationFrame(() => this.animate());
      return;
    }

    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);

    const targetRot = this.mouse.x * 0.3;
    this.rotation += (targetRot - this.rotation) * 0.02;
    this.time += 0.016;

    this.drawConnectingLines();
    this.drawGlobeOutline();
    this.drawGrid();
    this.drawRoutes();
    this.drawCities();
    this.drawMovingCargo();
    this.drawParticles();

    requestAnimationFrame(() => this.animate());
  }
}

let heroGlobe = null;

function initHeroGlobe() {
  heroGlobe = new HeroGlobe();
  heroGlobe.animate();
}
