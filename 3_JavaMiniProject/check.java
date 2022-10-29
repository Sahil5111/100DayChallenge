import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
 
import netscape.javascript.*;
 
/**
 * A sample Java applet that demonstrates how to call Javascript in order to
 * submit the form in the enclosing HTML page.
 */
public class check extends JApplet {
 
    private JButton button = new JButton("Submit");
 
    public void init() {
        getContentPane().setLayout(new FlowLayout());
        getContentPane().add(button);
 
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent evt) {
                buttonActionPerformed(evt);
            }
        });
    }
 
    public void buttonActionPerformed(ActionEvent evt) {
        try {
            JSObject jsObj = JSObject.getWindow(this);
 
            jsObj.call("submitForm", null);
 
        } catch (JSException ex) {
            ex.printStackTrace();
        }
    }
}