function round_board_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[98.5605306,-111.6250331],[95.6043711,-111.4402732]]).appendArc([95.5956537,-111.4397196],{"radius":4.35,"clockwise":true,"large":false}).appendPoint([92.849937,-111.2625766]).appendArc([88.78,-106.9216015],{"radius":4.35,"clockwise":true,"large":false}).appendPoint([88.78,-60.2]).appendPoint([88.76,-60.2]).appendPoint([88.7599999,-56.964684]).appendArc([90.3302326,-53.7872274],{"radius":4,"clockwise":true,"large":false}).appendArc([125.4000001,-37.4401457],{"radius":90,"clockwise":true,"large":false}).appendPoint([125.4,-37.4167915]).appendArc([180.8282443,-44.6601849],{"radius":135,"clockwise":true,"large":false}).appendArc([183.5,-48.4332164],{"radius":4,"clockwise":true,"large":false}).appendPoint([183.5,-54.6440649]).appendArc([186.7664881,-58.5762348],{"radius":4,"clockwise":false,"large":false}).appendArc([187.5641823,-58.65],{"radius":4.35,"clockwise":false,"large":false}).appendPoint([197.504,-58.65]).appendArc([201.854,-63],{"radius":4.35,"clockwise":true,"large":false}).appendPoint([201.854,-110.8]).appendPoint([201.8518846,-111.3347744]).appendPoint([201.7465466,-114.6840585]).appendPoint([201.700166,-115.1479171]).appendPoint([201.6737241,-115.6210734]).appendPoint([201.4944899,-116.2657245]).appendPoint([197.4870008,-126.1452287]).appendArc([197.3798684,-126.3878307],{"radius":4.35,"clockwise":true,"large":false}).appendPoint([194.4747834,-132.4585673]).appendArc([188.8715758,-134.5936127],{"radius":4.35,"clockwise":true,"large":false}).appendPoint([182.8274608,-132.0641407]).appendArc([182.2871592,-131.8786838],{"radius":4.35,"clockwise":false,"large":false}).appendArc([98.5605306,-111.6250331],{"radius":225,"clockwise":false,"large":false}).close().innerToCAG()
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

        