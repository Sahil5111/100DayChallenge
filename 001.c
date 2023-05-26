#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int romanToInt(char *s);
int val(char a);

int main()
{
    printf("%d", romanToInt("MCMXCIV")); // output 1994
    return 0;
}

int romanToInt(char *s)
{
    int length = strlen(s);
    int value = 0;
    for (int i = 0; i < length; i++)
    {
        if (val(s[i + 1]) > val(s[i]))
        {
            value -= val(s[i]);
        }
        else
        {
            value += val(s[i]);
        }
    }
    return value;
}

int val(char a)
{
    switch (a)
    {
    case 'I':
        return 1;
    case 'V':
        return 5;
    case 'X':
        return 10;
    case 'L':
        return 50;
    case 'C':
        return 100;
    case 'D':
        return 500;
    case 'M':
        return 1000;
    }
    return -1;
}