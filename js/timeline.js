document.addEventListener('DOMContentLoaded', function() {
    var timelineData = {
        "title": {
            "text": {
                "headline": "My VFX Progress",
                "text": "A journey through my Blender projects from start to finish."
            }
        },
        "events": [
            {
                "start_date": {
                    "year": "2023",
                    "month": "01",
                    "day": "01"
                },
                "text": {
                    "headline": "First Blender Project",
                    "text": "This is where it all started. My first Blender project was a simple 3D model of a donut."
                },
                "media": {
                    "url": "images/project1.png",
                    "caption": "My first Blender project: A 3D donut."
                }
            },
            {
                "start_date": {
                    "year": "2023",
                    "month": "03",
                    "day": "15"
                },
                "text": {
                    "headline": "Learning Animation",
                    "text": "I started learning animation in Blender and created my first animated scene."
                },
                "media": {
                    "url": "images/project2.gif",
                    "caption": "First animation project: A rotating cube."
                }
            },
            // Add more events as needed
        ]
    };

    var timelineOptions = {
        initial_zoom: 2,
        timenav_position: 'bottom'
    };

    timeline = new TL.Timeline('timeline-embed', timelineData, timelineOptions);
});
