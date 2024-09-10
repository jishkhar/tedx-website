export const fadeIn = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up' ? 250 : direction === 'down' ? -400 : 0,
            x: direction === 'left' ? 250 : direction === 'right' ? -250 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}




export const fadeIn2 = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}