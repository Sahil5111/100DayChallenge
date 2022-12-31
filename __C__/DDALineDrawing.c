#include <graphics.h>
#include <conio.h>
#include <stdio.h>
void main()
{
    int gd = DETECT, gm, i;
    float x, y, dx, dy, steps;
    int x1, y1, x2, y2;
    initgraph(&gd, &gm, "C:\\TURBOC3\\BGI");
    setbkcolor(WHITE);
    x1 = 100, y1 = 200, x2 = 500, y2 = 300;
    dx = (float)(x2 - x1);
    dy = (float)(y2 - y1);
    if (dx > dy)
    {
        steps = dx;
    }
    else
    {
        steps = dy;
    }
    dx = dx / steps;
    dy = dy / steps;
    x = x1;
    y = y1;
    i = 1;
    while (i < steps)
    {
        putpixel(x, y, RED);
        x += dx;
        y += dy;
        i++;
    }
    getch();
    closegraph();
}