#include <stdio.h>
#include <stdlib.h>

int partition(int a[], int low, int high)
{
    int i = low;
    int pivot = a[high];
    for (int j = low; j < high; j++)
    {
        if (a[j] <= pivot)
        {
            int temp = a[j];
            a[j] = a[i];
            a[i] = temp;
            i++;
        }
    }
    int temp = a[high];
    a[high] = a[i];
    a[i] = temp;
    return i;
}

void quicksort(int a[], int l, int h)
{
    int p;
    if (l < h)
    {
        p = partition(a, l, h);
        quicksort(a, l, p - 1);
        quicksort(a, p + 1, h);
    }
}

int main()
{
    int a[10] = {9, 8, 7, 6, 5, 4, 3, 2, 1, 0};
    for (int i = 0; i < 10; i++)
    {
        printf("%d ", a[i]);
    }
    printf("\n");
    quicksort(a, 0, 9);
    for (int i = 0; i < 10; i++)
    {
        printf("%d ", a[i]);
    }

    return 0;
}