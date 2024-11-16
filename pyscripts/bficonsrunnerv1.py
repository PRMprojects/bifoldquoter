from PIL import Image, ImageDraw
import math

class DoorDiagramGenerator:
    def __init__(self, panel_width=100, panel_height=200, margin=20):
        self.panel_width = panel_width
        self.panel_height = panel_height
        self.margin = margin
        self.line_width = 2
        
    def create_canvas(self, num_panels):
        # Calculate total width needed
        total_width = (self.panel_width * num_panels) + (self.margin * 2)
        total_height = self.panel_height + (self.margin * 2)
        
        # Create white background
        img = Image.new('RGB', (total_width, total_height), 'white')
        return img, ImageDraw.Draw(img)
    
    def draw_panel(self, draw, x, y, angle=0):
        """Draw a single door panel at given position and angle"""
        # Calculate corners of the panel
        points = [
            (x, y),  # top-left
            (x + self.panel_width, y),  # top-right
            (x + self.panel_width, y + self.panel_height),  # bottom-right
            (x, y + self.panel_height),  # bottom-left
        ]
        
        if angle != 0:
            # Rotate points around the left edge
            cos_a = math.cos(math.radians(angle))
            sin_a = math.sin(math.radians(angle))
            points = [(x + (px - x) * cos_a - (py - y) * sin_a,
                      y + (px - x) * sin_a + (py - y) * cos_a)
                     for px, py in points]
        
        # Draw panel outline
        draw.line(points + [points[0]], fill='black', width=self.line_width)
        
        # Draw hinge line
        draw.line([points[0], points[3]], fill='black', width=self.line_width)
        
    def generate_configuration(self, num_panels, angles, filename):
        """Generate a door configuration with specified number of panels and angles"""
        img, draw = self.create_canvas(num_panels)
        
        start_x = self.margin
        start_y = self.margin
        
        # Draw each panel
        for i in range(num_panels):
            self.draw_panel(draw, start_x + (i * self.panel_width), start_y, angles[i])
            
        img.save(filename)
        return img

# Example usage
generator = DoorDiagramGenerator()

# Generate some example configurations
def generate_examples():
    # 2-panel configuration (closed)
    generator.generate_configuration(2, [0, 0], 'doors_2panel_closed.png')
    
    # 2-panel configuration (partially open)
    generator.generate_configuration(2, [30, -30], 'doors_2panel_partial.png')
    
    # 3-panel configuration (closed)
    generator.generate_configuration(3, [0, 0, 0], 'doors_3panel_closed.png')
    
    # 3-panel configuration (partially open)
    generator.generate_configuration(3, [45, -45, 45], 'doors_3panel_partial.png')
    
    # 4-panel configuration (closed)
    generator.generate_configuration(4, [0, 0, 0, 0], 'doors_4panel_closed.png')
    
    # 4-panel configuration (partially open)
    generator.generate_configuration(4, [30, -30, 30, -30], 'doors_4panel_partial.png')

if __name__ == "__main__":
    generate_examples()