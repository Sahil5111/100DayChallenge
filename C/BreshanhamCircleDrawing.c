#include <dos.h>
#include <stdio.h>
#include <graphics.h>
#include <conio.h>
void draw_circle(int, int, int);
void symmetry(int, int, int, int);
void main()
{
    int xc, yc, R;
    int gd = DETECT, gm;
    initgraph(&gd, &gm, "C:\\TurboC3\\BGI");
    printf("Enter the centre of the circle:\n");
    printf("Xc=");
    scanf("%d", &xc);
    printf("yc=");
    scanf("%d", &yc);
    printf("enter the radius of the circle:\n");
    scanf("%d", &R);
    draw_circle(xc, yc, R);
    getch();
    closegraph();
}
void draw_circle(int xc, int yc, int rad)
{
    int x = 0;
    int y = rad;
    int p = 1 - rad;
    symmetry(x, y, xc, yc);
    for (x = 0; y > x; x++)
    {
        if (p < 0)
            p += 2 * x + 3;
        else
        {
            p += 2 * (x - y) + 5;
            y--;
        }
        symmetry(x, y, xc, yc);
        delay(50);
    }
}
void symmetry(int x, int y, int xc, int yc)
{
    putpixel(xc + x, yc - y, GREEN);
    delay(1);
    putpixel(xc + y, yc - x, GREEN);
    delay(1);
    putpixel(xc + y, yc + x, GREEN);
    delay(1);
    putpixel(xc + x, yc + y, GREEN);
    delay(1);
    putpixel(xc - x, yc + y, GREEN);
    delay(1);
    putpixel(xc - y, yc + x, GREEN);
    delay(1);
    putpixel(xc - y, yc - x, GREEN);
    delay(1);
    putpixel(xc - x, yc - y, GREEN);
    delay(5);
}