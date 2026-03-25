/* display.frag */
#version 460 core

in vec2 fragUV;
out vec4 fragColour;

uniform sampler2D frame;

void main() {
	//Simply outputs the colour for that pixel, from the final frame.
	fragColour = texture(frame, fragUV.xy);
}
