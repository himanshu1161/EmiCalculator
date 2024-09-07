export function calculateEMI({amount, interestRate, tenure, prepayment}) {

    const P = parseFloat(amount)
    const r = parseFloat(interestRate)/12/100;
    const n = parseInt(tenure,10);

    const EMI = (P * r * Math.pow(1+r,n)) / (Math.pow(1+r,n) - 1);

    let totalInterest = EMI * n - P;
    let totalAmount = EMI * n;

    if (prepayment){
        totalAmount -= parseFloat(prepayment)
    }

    return {EMI, totalInterest, totalAmount}
}