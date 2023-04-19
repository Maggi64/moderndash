import { move } from "moderndash";
import { move as rambdaVersion } from "rambda";
import { bench, describe } from "vitest";


describe ("Move", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i + 1);
    
    bench("ModernDash", () => {
        move(arr, 0, 600);
    });

    bench("Rambda", () => {
        rambdaVersion(0, 600, arr);
    });
});