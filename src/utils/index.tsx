export function classes(...classes: (string | boolean | undefined)[]): string {
    // boolean for constructions like [predicate] && [className]
    return classes.filter(className => className).join(" ");
}
