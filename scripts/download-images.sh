#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images/topics

# Download placeholder images for topics
curl -o public/images/topics/atlas-hero.jpg "https://picsum.photos/1600/900"
curl -o public/images/topics/atlas-timeline.jpg "https://picsum.photos/800/600"
curl -o public/images/topics/tesla-fsd.jpg "https://picsum.photos/800/600"
curl -o public/images/topics/starship.jpg "https://picsum.photos/800/600"
curl -o public/images/topics/m3-chip.jpg "https://picsum.photos/800/600"
curl -o public/images/topics/gpt4.jpg "https://picsum.photos/800/600"
curl -o public/images/topics/quantum.jpg "https://picsum.photos/800/600"

# Download placeholder images for Tesla FSD detail page
curl -o public/images/topics/tesla-fsd-hero.jpg "https://picsum.photos/1600/900"
curl -o public/images/topics/tesla-neural.jpg "https://picsum.photos/800/600"
curl -o public/images/topics/tesla-vision.jpg "https://picsum.photos/800/600"
curl -o public/images/topics/tesla-decision.jpg "https://picsum.photos/800/600"

echo "Images downloaded successfully!" 