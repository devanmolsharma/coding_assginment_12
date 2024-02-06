#!/bin/bash

components=("Button" "Card" "Dropdown" "HeroImage" "Img" "Label" "RadioButton" "Table" "Text")

for component in "${components[@]}"
do
    touch "$component/$component.tsx"
    touch "$component/$component.stories.tsx"
    touch "$component/$component.types.tsx"
    touch "$component/$component.tests.tsx"
    touch "$component/index.ts"
done
