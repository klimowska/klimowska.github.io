export const joinPaths = (part1, part2) => 
    part1.replace(/^(.+)\/?$/, `$1`) 
        + '/' + part2.replace(/^\/?(.+)\/?$/, `$1`);

