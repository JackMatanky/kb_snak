function round_board_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[98.5605306,-111.6250331],[95.6035296,-111.4402206]]).appendArc([95.5965155,-111.4397752],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([92.0546619,-111.2112685]).appendArc([88.78,-107.7185299],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([88.78,-60.2]).appendPoint([88.76,-60.2]).appendPoint([88.7599999,-57.397222]).appendArc([90.5368421,-53.8147074],{"radius":4.5,"clockwise":true,"large":false}).appendArc([125.4000001,-37.6251457],{"radius":90,"clockwise":true,"large":false}).appendPoint([125.4,-37.6167915]).appendArc([179.5517242,-44.4179695],{"radius":135,"clockwise":true,"large":false}).appendArc([182.6000001,-48.6773705],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([182.6,-54.9]).appendPoint([182.6662643,-55.5212275]).appendArc([186.1465215,-58.65],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([198.354,-58.65]).appendArc([201.854,-62.15],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([201.854,-110.8]).appendPoint([201.8518846,-111.3347744]).appendPoint([201.7465466,-114.6840585]).appendPoint([201.700166,-115.1479171]).appendPoint([201.6737241,-115.6210734]).appendPoint([201.4944899,-116.2657245]).appendPoint([197.4772572,-126.169249]).appendArc([197.3910588,-126.3644461],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([194.1257668,-133.1879049]).appendArc([189.6174388,-134.9057576],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([182.7699816,-132.0400855]).appendArc([182.2847086,-131.8775574],{"radius":3.5,"clockwise":false,"large":false}).appendArc([98.5605306,-111.6250331],{"radius":225,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = round_board_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        