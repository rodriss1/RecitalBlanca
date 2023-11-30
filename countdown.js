simplyCountdown('#cuenta', {
    year: 2024,
    month: 3, 
    day: 22,
    hours: 18,
    minutes: 0, 
    seconds: 0, 
    words: {
        days: { singular: 'Día', plural: 'Días' },
        hours: { singular: 'Hora', plural: 'Horas' },
        minutes: { singular: 'Minuto', plural: 'Minutos' },
        seconds: { singular: 'Segundo', plural: 'Segundos' }
    },
    plural: true,
    inline: false,
    inlineClass: 'simply-countdown-inline',
    enableUtc: false,
    refresh: 1000,
    sectionClass: 'simply-section',
    amountClass: 'simply-amount',
    wordClass: 'simply-word',
    zeroPad: false,
    countUp: false
});