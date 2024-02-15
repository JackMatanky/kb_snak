function round_board_switch_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[98.5605306,-111.6250331],[95.6043711,-111.4402732]]).appendArc([95.5956537,-111.4397196],{"radius":4.35,"clockwise":true,"large":false}).appendPoint([92.849937,-111.2625766]).appendArc([88.78,-106.9216015],{"radius":4.35,"clockwise":true,"large":false}).appendPoint([88.78,-60.2]).appendPoint([88.76,-60.2]).appendPoint([88.7599999,-56.964684]).appendArc([90.3302326,-53.7872274],{"radius":4,"clockwise":true,"large":false}).appendArc([125.4000001,-37.4401457],{"radius":90,"clockwise":true,"large":false}).appendPoint([125.4,-37.4167915]).appendArc([180.8282443,-44.6601849],{"radius":135,"clockwise":true,"large":false}).appendArc([183.5,-48.4332164],{"radius":4,"clockwise":true,"large":false}).appendPoint([183.5,-54.6440649]).appendArc([186.7664881,-58.5762348],{"radius":4,"clockwise":false,"large":false}).appendArc([187.5641823,-58.65],{"radius":4.35,"clockwise":false,"large":false}).appendPoint([197.504,-58.65]).appendArc([201.854,-63],{"radius":4.35,"clockwise":true,"large":false}).appendPoint([201.854,-110.8]).appendPoint([201.8518846,-111.3347744]).appendPoint([201.7465466,-114.6840585]).appendPoint([201.700166,-115.1479171]).appendPoint([201.6737241,-115.6210734]).appendPoint([201.4944899,-116.2657245]).appendPoint([197.4870008,-126.1452287]).appendArc([197.3798684,-126.3878307],{"radius":4.35,"clockwise":true,"large":false}).appendPoint([194.4747834,-132.4585673]).appendArc([188.8715758,-134.5936127],{"radius":4.35,"clockwise":true,"large":false}).appendPoint([182.8274608,-132.0641407]).appendArc([182.2871592,-131.8786838],{"radius":4.35,"clockwise":false,"large":false}).appendArc([98.5605306,-111.6250331],{"radius":225,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[199.5,-113.5],"radius":1.5})
.union(
    CAG.circle({"center":[184.5,-107.5],"radius":1.5})
).union(
    CAG.circle({"center":[176.5911099,-116.3558285],"radius":1.5})
).union(
    CAG.circle({"center":[163,-92],"radius":1.5})
).union(
    CAG.circle({"center":[163,-58],"radius":1.5})
).union(
    CAG.circle({"center":[109,-89.5],"radius":1.5})
).union(
    CAG.circle({"center":[109,-55.5],"radius":1.5})
).union(
    new CSG.Path2D([[178.0987956,-124.946608],[190.7417892,-130.8421328]]).appendPoint([196.637314,-118.1991392]).appendPoint([183.9943204,-112.3036144]).appendPoint([178.0987956,-124.946608]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.025,-63.975],[178.975,-63.975]]).appendPoint([178.975,-50.025]).appendPoint([165.025,-50.025]).appendPoint([165.025,-63.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.025,-60.975],[160.975,-60.975]]).appendPoint([160.975,-47.025]).appendPoint([147.025,-47.025]).appendPoint([147.025,-60.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.025,-54.975],[142.975,-54.975]]).appendPoint([142.975,-41.025]).appendPoint([129.025,-41.025]).appendPoint([129.025,-54.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.025,-80.975],[178.975,-80.975]]).appendPoint([178.975,-67.025]).appendPoint([165.025,-67.025]).appendPoint([165.025,-80.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.025,-97.975],[178.975,-97.975]]).appendPoint([178.975,-84.025]).appendPoint([165.025,-84.025]).appendPoint([165.025,-97.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.025,-77.975],[160.975,-77.975]]).appendPoint([160.975,-64.025]).appendPoint([147.025,-64.025]).appendPoint([147.025,-77.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.025,-94.975],[160.975,-94.975]]).appendPoint([160.975,-81.025]).appendPoint([147.025,-81.025]).appendPoint([147.025,-94.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.025,-71.975],[142.975,-71.975]]).appendPoint([142.975,-58.025]).appendPoint([129.025,-58.025]).appendPoint([129.025,-71.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.025,-88.975],[142.975,-88.975]]).appendPoint([142.975,-75.025]).appendPoint([129.025,-75.025]).appendPoint([129.025,-88.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.025,-60.975],[124.975,-60.975]]).appendPoint([124.975,-47.025]).appendPoint([111.025,-47.025]).appendPoint([111.025,-60.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.025,-77.975],[124.975,-77.975]]).appendPoint([124.975,-64.025]).appendPoint([111.025,-64.025]).appendPoint([111.025,-77.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.025,-94.975],[124.975,-94.975]]).appendPoint([124.975,-81.025]).appendPoint([111.025,-81.025]).appendPoint([111.025,-94.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.025,-72.975],[106.975,-72.975]]).appendPoint([106.975,-59.025]).appendPoint([93.025,-59.025]).appendPoint([93.025,-72.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.025,-89.975],[106.975,-89.975]]).appendPoint([106.975,-76.025]).appendPoint([93.025,-76.025]).appendPoint([93.025,-89.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.025,-106.975],[106.975,-106.975]]).appendPoint([106.975,-93.025]).appendPoint([93.025,-93.025]).appendPoint([93.025,-106.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[156.4574045,-118.1820698],[169.9320698,-121.7925955]]).appendPoint([173.5425955,-108.3179302]).appendPoint([160.0679302,-104.7074045]).appendPoint([156.4574045,-118.1820698]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = round_board_switch_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let switchplate__part_0_bounds = switchplate__part_0.getBounds();
                let switchplate__part_0_x = switchplate__part_0_bounds[0].x + (switchplate__part_0_bounds[1].x - switchplate__part_0_bounds[0].x) / 2
                let switchplate__part_0_y = switchplate__part_0_bounds[0].y + (switchplate__part_0_bounds[1].y - switchplate__part_0_bounds[0].y) / 2
                switchplate__part_0 = translate([-switchplate__part_0_x, -switchplate__part_0_y, 0], switchplate__part_0);
                switchplate__part_0 = rotate([0,0,0], switchplate__part_0);
                switchplate__part_0 = translate([switchplate__part_0_x, switchplate__part_0_y, 0], switchplate__part_0);

                switchplate__part_0 = translate([0,0,0], switchplate__part_0);
                let result = switchplate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_fn();
            }

        