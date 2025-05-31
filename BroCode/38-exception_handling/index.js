try {
    const dividend = Number(prompt("Enter the dividend:"));
    const divisor = Number(prompt("Enter the divisor:"));

    if (divisor === 0) {
        throw new Error("Divisor cannot be zero!");
    } else if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be numbers!");
    }

    const result = dividend / divisor;
    console.log(result);
} catch (error) {
    console.error(error);
} finally {
    console.log("This will always execute.");
}