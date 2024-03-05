function calculate() {
    let total = 0;

    // Calculate points for Base scores
    const baseScoreCheckboxes = document.querySelectorAll('input[name="base-score"]:checked');
    baseScoreCheckboxes.forEach(checkbox => {
        total += parseInt(checkbox.value);
    });

    // Calculate points for Bonuses
    const bonusCheckboxes = document.querySelectorAll('input[name="bonus"]:checked');
    bonusCheckboxes.forEach(checkbox => {
        total += parseInt(checkbox.value);
    });

    // Calculate points for Special additions
    const specialAdditionCheckboxes = document.querySelectorAll('input[name="special-addition"]:checked');
    specialAdditionCheckboxes.forEach(checkbox => {
        total += parseInt(checkbox.value);
    });

    // Calculate points for Other
    const otherCheckboxes = document.querySelectorAll('input[name="other"]:checked');
    otherCheckboxes.forEach(checkbox => {
        total += parseInt(checkbox.value);
    });

    // Calculate points for writing based on word count
    const writingWords = parseInt(document.getElementById('writing-words').value);
    const writingPointsPerWord = 5; // 5 LP per 50 words
    total += Math.floor(writingWords / 50) * writingPointsPerWord;

    // Calculate points for time based on hours
    const timeHours = parseInt(document.getElementById('time-hours').value);
    const timePointsPerHour = 1; // 1 LP per hour
    total += timeHours * timePointsPerHour;

    // Calculate points for animation based on frames
    const animationFrames = parseInt(document.getElementById('animation-frames').value);
    const animationPointsPerFrame = 2; // 2 LP per frame
    total += animationFrames * animationPointsPerFrame;

    // Update the total displayed on the page
    document.getElementById('total').textContent = total;
}
