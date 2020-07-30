import 'package:beizer_curve_ui/shadow/clip_shadow.dart';
import 'package:flutter/material.dart';
import 'package:beizer_curve_ui/widgets/BottomLeftClipper.dart';
import 'package:beizer_curve_ui/widgets/BottomLeftClipper_bottom.dart';
import 'package:beizer_curve_ui/widgets/TopRightClipper.dart';
import 'package:beizer_curve_ui/widgets/TopRightClipper_bottom.dart';
final primaryColor = Color.fromRGBO(235, 228, 229, 1);

class Page extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;

    final shadow = BoxShadow(
        color: Colors.grey,
        offset: Offset(-5, 3),
        blurRadius: 5,
        spreadRadius: 10);

    final heightContainer = Container(
      height: height * 0.99,
      color: primaryColor,
    );

    final widthContainer = Container(
      width: width * 0.99,
      color: primaryColor,
    );
    return Material(
      child: Stack(
        children: <Widget>[
          Align(
            alignment: Alignment(5, 0),
            child: ClipShadowPath(
                shadow: shadow,
                clipper: TopRightBottomClipper(),
                child: widthContainer),
          ),
          Align(
            alignment: Alignment(80, 0),
            child: ClipShadowPath(
              shadow: shadow,
              clipper: TopRightClipper(),
              child: widthContainer,
            ),
          ),
          Align(
            alignment: Alignment(0, 30),
            child: ClipShadowPath(
              shadow: shadow,
              clipper: BottomLeftClipperBottom(),
              child: heightContainer,
            ),
          ),
          Align(
              alignment: Alignment(0, 9),
              child: SizedBox(
                height: height * 0.99,
                width: width,
                child: Image.asset(
                  'images/img.png',
                  fit: BoxFit.fitWidth,
                ),
              )),
          Align(
            alignment: Alignment(0, 87),
            child: ClipShadowPath(
              shadow: shadow,
              clipper: BottomLeftClipper(),
              child: heightContainer,
            ),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: Padding(
              padding: EdgeInsets.only(bottom: 20),
              child: SizedBox(
                width: width * 0.8,
                child: MaterialButton(
                    color: Color.fromRGBO(0, 0, 60, 1),
                    onPressed: () {},
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text(
                          'Let\'s Get Started ',
                          style: TextStyle(fontSize: 20, color: Colors.white),
                        ),
                        Text(
                          ' >>',
                          style: TextStyle(fontSize: 30, color: Colors.white),
                        ),
                      ],
                    )),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
