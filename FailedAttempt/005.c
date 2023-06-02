#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *convert(char *s, int numRows)
{
    int global = 2 * (numRows - 1);
    int length = strlen(s);
    char *result = (char *)malloc(length * sizeof(char));
    int counter = 0;
    for (int i = 0; i < length; i++)
    {
        for (int j = 0; i + j < length; j += global)
        {
            if (counter >= length)
            {
                break;
            }
            result[counter] = s[i + j];
            counter++;
            if (i != 0 && i != numRows - 1 && j + global - i < length)
            {
                if (counter >= length)
                {
                    break;
                }
                result[counter] = s[j + global - i];
                counter++;
            }
        }
    }
    return result;
}


int main()
{
    char str[] = "PAYPALISHIRING";
    printf("%s", convert(str, 4));
    return 0;
}