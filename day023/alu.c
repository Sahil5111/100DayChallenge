#include <stdio.h>
#include <string.h>

int bit = 5;

void add(int *num1, int *num2)
{
int carry = 0;
    for (int i = bit - 1; i >= 0; i--)
    {
        int a = num1[i];
        num1[i] = (num1[i] + num2[i] + carry) % 2;
        carry = (a + num2[i] + carry) / 2;
    }
}

void disp(int *num1, int *num2)
{
    for (int i = 0; i < bit; i++)
    {
        printf("%d", num1[i]);
    }
    printf("\t");
    for (int i = 0; i < bit; i++)
    {
        printf("%d", num2[i]);
    }
    printf("\n");
}

void complement2(int *a)
{
    for (int i = 0; i < bit; i++)
    {
        if (a[i] == 0)
        {
            a[i] = 1;
        }
        else
        {
            a[i] = 0;
        }
    }
    int temp[5] = {0, 0, 0, 0, 1};
    add(a, temp);
}

int func(char *a)
{
    if (!strcmp(a, "0000"))
    {
        return 0;
    }
    else if (!strcmp(a, "0001"))
    {
        return 1;
    }
    else if (!strcmp(a, "0010"))
    {
        return 2;
    }
    else if (!strcmp(a, "0011"))
    {
        return 3;
    }
    else
    {
        return 4;
    }
}

int main()
{
    int a[5] = {0, 1, 0, 1, 0};
    int b[5] = {0, 0, 1, 0, 1};
    int temp[5] = {0, 0, 0, 0, 1};
    char str[5];
    int inp;
    disp(a, b);
    while (1)
    {
        printf("enter an operation\n");
        scanf("%s", &str);
        inp = func(str);
        switch (inp)
        {
        case 0:
            add(a, b);
            disp(a, b);
            break;
        case 1:
            complement2(b);
            add(a, b);
            disp(a, b);
            break;
        case 2:
            add(a, temp);
            disp(a, b);
            break;
        case 3:
            complement2(temp);
            add(a, temp);
            disp(a, b);
            break;
        case 4:
            return 0;
        default:
            printf("invalid input\n");
        }
    }
    return 0;
}