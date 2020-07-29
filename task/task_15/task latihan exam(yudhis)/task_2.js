function Vowels_Count(str) {

    var arr_vowel_list = 'aeiouAEIOU'.split('');

    var count = 0;

    str.split('').forEach(function (e) {
        if (arr_vowel_list.indexOf(e) !== -1) {
            count++;
        }
    });



    console.log(count);
}

Vowels_Count("budi pergi ke pasar");
Vowels_Count("purwadhika");