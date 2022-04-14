// MAY NOT BE OPTIMAL
const backSpaceCompare = function (s, t) {
    let p1 = s.length - 1,
        p2 = t.length - 1,
        h1,
        h2;

    while (p1 >= 0 || p2 >= 0) {
        if (s[p1] !== t[p2]) return false;

        if (s[p1] === '#') {
            h1 = 2;
            while (h1 > 0) {
                p1--;
                h1--;
                if (s[p1] === '#') h1 += 2;
            }
        }

        if (t[p2] === '#') {
            h2 = 2;
            while (h2 > 0) {
                p2--;
                h2--;
                if (t[p2] === '#') h2 += 2;
            }
        }

        p1--;
        p2--;
    }

    return true;
};

// MIGHT BE THE BEST SOLUTION
const typedOutString = function (s, t) {
    const s1 = [];
    const t1 = [];
    let l = 0,
        r = 0;

    while (l < s.length || r < t.length) {
        if (l < s.length) {
            if (s[l] !== '#') s1.push(s[l]);
            else s1.pop();
            l++;
        }

        if (r < t.length) {
            if (t[r] !== '#') t1.push(t[r]);
            else t1.pop();
            r++;
        }
    }
    //   console.log(s1, t1)
    if (s1.length !== t1.length) return false;

    for (let i = 0; i < s1.length; i++) if (s1[i] !== t1[i]) return false;

    return true;
};
