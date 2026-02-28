// map.js — Leaflet image map for Pomaera
// =============================================
// HOW TO ADD A NEW MARKER:
// Find the coordinates by hovering your mouse over the map image
// in a browser (use browser devtools or the debug mode below).
// Then add a new object to the `markers` array following the same format.
//
// COORDINATE SYSTEM:
// Leaflet image maps use [y, x] pixel coordinates where:
//   [0, 0]      = TOP-LEFT of the image
//   [1125, 2000] = BOTTOM-RIGHT of the image (your map is 2000x1125px)
// So [500, 800] means 500px from top, 800px from left.
// =============================================

document.addEventListener('DOMContentLoaded', function () {

    // =============================================
    // MAP IMAGE DIMENSIONS
    // EXPLANATION: These MUST match the actual pixel size of your image.
    // If they're wrong, markers will appear in the wrong positions.
    // Your map is 2000 x 1125 pixels.
    // =============================================
    const MAP_W = 2000;
    const MAP_H = 1125;

    // =============================================
    // MARKERS
    // EXPLANATION: Each marker is an object with:
    //   coords  — [y, x] pixel position on the map image
    //   name    — shown as the popup title
    //   region  — region name (used for colour coding)
    //   type    — location type (city, dungeon, town, wilderness, ruin)
    //   desc    — short description shown in popup
    //   link    — (optional) if set, popup shows a "Ver mais" button
    //             that filters the locations grid to this location
    //
    // TO FIND COORDINATES:
    // Set debugMode = true below, then hover over the map in your browser.
    // The coordinates will be shown in the top-right corner of the map.
    // Once you have the right coords, set debugMode = false again.
    // =============================================
    const markers = [
        {
            coords: [523, 814],
            name: "Inata",
            region: "âmago",
            type: "city",
            desc: "A principal cidade do Âmago e sede do Conselho das Cinco Cidades.",
            link: true
        },
        // ---- ADD YOUR MARKERS BELOW THIS LINE ----
        // Copy and paste this template for each new location:
        //
        // {
        //     coords: [Y, X],       // pixel position [top, left]
        //     name: "Nome",
        //     region: "região",     // âmago | coralia | luna | modega | montes | myr | piéco | tariniel
        //     type: "city",         // city | town | dungeon | wilderness | ruin
        //     desc: "Descrição curta.",
        //     link: true            // set false if no locations page entry yet
        // },
        {
            coords: [1004, 1047],       // pixel position [top, left]
            name: "Lago Roxo",
            region: "coralia",     // âmago | coralia | luna | modega | montes | myr | piéco | tariniel
            type: "wilderness",         // city | town | dungeon | wilderness | ruin
            desc: "Um lago que há eras se tornou roxo devido as fortes energias mágicas que emanam dele.",
            link: true            // set false if no locations page entry yet
        },

        {
            coords: [381, 1248],       // pixel position [top, left]
            name: "Porto Draco",
            region: "modega",     // âmago | coralia | luna | modega | montes | myr | piéco | tariniel
            type: "city",         // city | town | dungeon | wilderness | ruin
            desc: "Uma cidade costeira com lendas e histórias sobre dragões, mas todos sabem que o verdadeiro perigo está no mar.",
            link: true            // set false if no locations page entry yet
        },
    ];

    // =============================================
    // REGION COLOURS
    // Matches your existing regionColors in locations.js
    // =============================================
    const regionColors = {
        'âmago':    '#00d659',
        'coralia':  '#aec9dd',
        'luna':     '#9b4fc2',
        'modega':   '#ed8936',
        'montes':   '#93c7a9',
        'myr':      '#c2456e',
        'piéco':    '#d2d600',
        'tariniel': '#0092d6'
    };

    // =============================================
    // TYPE ICONS (Font Awesome class names)
    // =============================================
    const typeIcons = {
        city:       'fa-city',
        town:       'fa-home',
        dungeon:    'fa-dungeon',
        wilderness: 'fa-tree',
        ruin:       'fa-monument'
    };

    // =============================================
    // DEBUG MODE
    // Set to true to see pixel coordinates as you hover the map.
    // Useful for placing new markers accurately.
    // Set back to false when done.
    // =============================================
    const debugMode = true;

    // =============================================
    // INITIALISE LEAFLET
    // EXPLANATION: We use CRS.Simple because this is a flat image,
    // not a real-world geographic projection. CRS.Simple treats
    // coordinates as plain pixels, which is what we want.
    // =============================================
    const map = L.map('pomaera-map', {
        crs: L.CRS.Simple,
        minZoom: -2,        // how far out the user can zoom
        maxZoom: 2,         // how far in the user can zoom
        zoomSnap: 0.5,      // zoom increments
        attributionControl: false  // hide the "Leaflet" watermark
    });

    // =============================================
    // OVERLAY THE IMAGE
    // EXPLANATION: L.imageOverlay takes the image URL and its
    // bounds in [y, x] pixel coordinates.
    // The bounds go from [0, 0] (top-left) to [MAP_H, MAP_W] (bottom-right).
    // =============================================
    const bounds = [[0, 0], [MAP_H, MAP_W]];
    L.imageOverlay('/images/PomaeraNovo.webp', bounds).addTo(map);

    // =============================================
    // SET INITIAL VIEW
    // EXPLANATION: fitBounds makes the map start zoomed to show
    // the entire image. The padding adds a small border around it.
    // =============================================
    map.fitBounds(bounds, { padding: [10, 10] });
    map.setMaxBounds(bounds.map((b, i) => i === 0
        ? [b[0] - 200, b[1] - 200]
        : [b[0] + 200, b[1] + 200]
    ));

    // =============================================
    // CREATE CUSTOM MARKER ICON
    // EXPLANATION: We create a custom divIcon instead of the default
    // blue Leaflet pin. This gives us full CSS control over the look,
    // matching your site's dark fantasy aesthetic.
    // The colour ring around the icon matches the region colour.
    // =============================================
    function createIcon(marker) {
        const color = regionColors[marker.region] || '#fbbf24';
        const icon = typeIcons[marker.type] || 'fa-map-marker-alt';

        return L.divIcon({
            className: 'pomaera-marker',
            html: `
                <div class="marker-pin" style="--marker-color: ${color}">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="marker-pulse" style="--marker-color: ${color}"></div>
            `,
            iconSize: [36, 36],
            iconAnchor: [18, 18],   // centre of the icon sits on the coordinate
            popupAnchor: [0, -22]   // popup appears above the icon
        });
    }

    // =============================================
    // ADD MARKERS TO MAP
    // =============================================
    markers.forEach(markerData => {
        const color = regionColors[markerData.region] || '#fbbf24';
        const icon = typeIcons[markerData.type] || 'fa-map-marker-alt';

        // "Ver mais" button only appears if link: true
        // EXPLANATION: Clicking it scrolls down to the locations grid
        // and could in future filter to that specific location.
        const linkBtn = markerData.link
          ? `<button class="popup-link" onclick="openLocationFromMap('${markerData.name}')">
            <i class="fas fa-arrow-down"></i> Ver nas Localidades
            </button>`
          : '';

        const popupContent = `
            <div class="pomaera-popup">
                <div class="popup-header" style="border-left: 3px solid ${color}">
                    <span class="popup-type" style="color: ${color}">
                        <i class="fas ${icon}"></i>
                        ${markerData.type.charAt(0).toUpperCase() + markerData.type.slice(1)}
                    </span>
                    <h3 class="popup-name">${markerData.name}</h3>
                    <p class="popup-region" style="color: ${color}">
                        <i class="fas fa-map-pin"></i>
                        ${markerData.region.charAt(0).toUpperCase() + markerData.region.slice(1)}
                    </p>
                </div>
                <p class="popup-desc">${markerData.desc}</p>
                ${linkBtn}
            </div>
        `;

        L.marker(markerData.coords, { icon: createIcon(markerData) })
            .addTo(map)
            .bindPopup(popupContent, {
                maxWidth: 260,
                className: 'pomaera-leaflet-popup'
            });
    });

    // =============================================
    // DEBUG MODE — shows pixel coordinates on hover
    // =============================================
    if (debugMode) {
        const debugDisplay = document.getElementById('map-debug-coords');
        if (debugDisplay) {
            map.on('mousemove', function (e) {
                const y = Math.round(e.latlng.lat);
                const x = Math.round(e.latlng.lng);
                debugDisplay.textContent = `coords: [${y}, ${x}]`;
            });
        }
    }

    console.log(`%c Pomaera Map Loaded! 🗺️`, `color: #fbbf24; font-size: 14px; font-weight: bold;`);
    console.log(`%c ${markers.length} marker(s) placed`, `color: #94a3b8; font-size: 13px;`);

    // Opens the location modal from a map marker click
    window.openLocationFromMap = function(locationName) {
    // Reveal all hidden cards first so we can find the right one
    document.querySelectorAll('.hidden-card').forEach(c => {
        c.classList.remove('hidden-card');
        c.classList.add('visible');
    });
    const showMoreBtn = document.querySelector('.show-more-btn');
    if (showMoreBtn) showMoreBtn.innerHTML = `<i class="fas fa-chevron-up"></i> Ver menos`;

    // Find the matching location card by name
    const cards = document.querySelectorAll('.location-card');
    for (const card of cards) {
        const title = card.querySelector('.location-title');
        if (title && title.textContent.trim() === locationName) {
            // Close the map popup
            map.closePopup();
            // Scroll to the card
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Flash a gold highlight ring, then open the modal
            card.style.transition = 'box-shadow 0.3s';
            card.style.boxShadow = '0 0 0 3px var(--accent-gold)';
            setTimeout(() => {
                card.style.boxShadow = '';
                card.querySelector('.view-details').click();
            }, 600);
            return;
        }
    }
    };
});