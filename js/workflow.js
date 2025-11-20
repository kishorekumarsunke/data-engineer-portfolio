document.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('.workflow-svg');
    const detailsPanel = document.querySelector('.workflow-details');
    const detailsTitle = detailsPanel.querySelector('h3');
    const detailsText = detailsPanel.querySelector('p');

    // Stage Data
    const stages = {
        'source': { title: 'Data Sources', desc: 'Active ingestion from APIs, SQL databases, and IoT devices.' },
        'ingest': { title: 'Ingestion Layer', desc: 'Real-time streaming (Kafka) and batch processing.' },
        'lake': { title: 'Data Lake', desc: 'Scalable storage for raw and unstructured data.' },
        'transform': { title: 'Transformation', desc: 'Processing and cleaning data using Spark and dbt.' },
        'warehouse': { title: 'Data Warehouse', desc: 'Structured, query-ready data in Snowflake/Redshift.' },
        'ml_train': { title: 'Machine Learning', desc: 'Training models with governed feature stores.' },
        'bi': { title: 'BI & Analytics', desc: 'Live dashboards and reporting with real-time monitoring.' }
    };

    // Interactive Cards
    document.querySelectorAll('.workflow-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const id = card.getAttribute('data-id');
            if (stages[id]) {
                detailsTitle.textContent = stages[id].title;
                detailsText.textContent = stages[id].desc;
                detailsPanel.classList.add('active');
            }
        });

        card.addEventListener('mouseleave', () => {
            // detailsPanel.classList.remove('active'); 
        });

        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = card.getAttribute('data-id');
            if (stages[id]) {
                detailsTitle.textContent = stages[id].title;
                detailsText.textContent = stages[id].desc;
                detailsPanel.classList.add('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.workflow-card') && !e.target.closest('.workflow-details')) {
            detailsPanel.classList.remove('active');
        }
    });

    // Animation Logic
    function spawnPacket(pathId, color = '#2dd4bf', onComplete = null) {
        const path = document.getElementById(pathId);
        if (!path) return;

        const packet = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        packet.setAttribute("r", "5");
        packet.setAttribute("fill", color);
        packet.classList.add("data-packet");

        svg.appendChild(packet);

        const length = path.getTotalLength();
        const duration = 1500;

        let startTime = null;

        function animate(time) {
            if (!startTime) startTime = time;
            const progress = (time - startTime) / duration;

            if (progress < 1) {
                const point = path.getPointAtLength(progress * length);
                packet.setAttribute("cx", point.x);
                packet.setAttribute("cy", point.y);
                packet.style.opacity = 1;
                requestAnimationFrame(animate);
            } else {
                packet.remove();
                if (onComplete) onComplete();
            }
        }

        requestAnimationFrame(animate);
    }

    // Traffic Loop
    setInterval(() => {
        // Main Flow
        spawnPacket('path-source-ingest', '#38bdf8', () => {
            spawnPacket('path-ingest-lake', '#38bdf8', () => {
                spawnPacket('path-lake-transform', '#818cf8', () => {
                    spawnPacket('path-transform-warehouse', '#c084fc', () => {
                        // Branching
                        spawnPacket('path-warehouse-ml', '#2dd4bf');
                        spawnPacket('path-warehouse-bi', '#f472b6');
                    });
                });
            });
        });

    }, 2000);
});
