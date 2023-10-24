varying vec2 vUv;

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main()
{
    // Pattern 4
    // float strength = vUv.x;

    // Pattern 5
    // float strength = 1.0 - vUv.y;

    // Pattern 6
    // float strength = vUv.y * 10.0;

    // Pattern 7
    // float strength = mod(vUv.y * 10.0, 1.0);
    
    // Pattern 8
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.5, strength);

    // Pattern 9
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.8, strength);
    
    // Pattern 10
    // float strength = mod(vUv.x * 10.0, 1.0);
    // strength = step(0.8, strength);
    
    // Pattern 11
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));
    
    // Pattern 12
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
    
    // Pattern 13
    // float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
    
    
    // Pattern 14
    // float strength = step(0.4, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0, 1.0));

    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0, 1.0));
    // float strength = barX + barY;

    // Pattern 15
    //  float barX = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0 - 0.2, 1.0));
    // float strength = barX + barY;

    // Pattern 16
    // float strength = abs(vUv.x - 0.5);

    // Pattern 17
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // Pattern 18       
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // Pattern 19
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // Pattern 20
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // strength *= 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // Pattern 21
    // float strength = floor(vUv.x * 10.0) / 10.0;

    // Pattern 22
    // float strength = floor(vUv.x * 10.0) / 10.0 * floor(vUv.y * 10.0) / 10.0; 

    // Pattern 23
    // float strength = random(vUv);

    // Patern 24
    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor(vUv.y * 10.0) / 10.0);
    // float strength = random(gridUv);

    // Patern 25
    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor((vUv.y + vUv.x * 0.5) * 10.0) / 10.0);
    // float strength = random(gridUv);

    // Pattern 26
    // float strength = length(vUv);

    // Pattern 27
    // float strength = distance(vUv, vec2(0.5));

    // Pattern 28 
    // float strength = 1.0 - distance(vUv, vec2(0.5));    

    // Pattern 29
    // float strength = 0.015 / (distance(vUv, vec2(0.5)));

    // Pattern 30
    // float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));

 // Pattern 31
    // vec2 lightUvX = vec2(
    //     vUv.x * 0.1 + 0.45,
    //     vUv.y * 0.5 + 0.25
    // );
    // float lightX = 0.015 / distance(lightUvX, vec2(0.5));

    //   vec2 lightUvY = vec2(
    //     vUv.y * 0.1 + 0.45,
    //     vUv.x * 0.5 + 0.25
    // );
    // float lightY = 0.015 / distance(lightUvY, vec2(0.5));

    // float strength = lightX * lightY;
    // gl_FragColor = vec4(strength, strength, strength, 1.0);
    
    // Pattern 32
    // vec2 rotatedUv = rotate(vUv, PI * 0.25, vec2(0.5));
    
    // vec2 lightUvX = vec2(
    //     rotatedUv.x * 0.1 + 0.45,
    //     rotatedUv.y * 0.5 + 0.25
    // );
    // float lightX = 0.015 / distance(lightUvX, vec2(0.5));

    // vec2 lightUvY = vec2(
    //     rotatedUv.y * 0.1 + 0.45,
    //     rotatedUv.x * 0.5 + 0.25
    // );
    // float lightY = 0.015 / distance(lightUvY, vec2(0.5));


    // float strength = (lightX * lightY);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // // Pattern 33
    // float strength = step(0.5, distance(vUv, vec2(0.5)) + 0.25);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // Pattern 34
    // float strength = abs(distance(vUv, vec2(0.5)) - 0.25);

    // Pattern 35
    // float strength = step(0.02, abs(distance(vUv, vec2(0.5)) - 0.25));

    // Pattern 36
    // float strength = 1.0 - step(0.02, abs(distance(vUv, vec2(0.5)) - 0.25));

    // Pattern 37
    // vec2 waveUv = vec2(
    //     vUv.x,
    //     vUv.y + sin(vUv.x * 30.0) * 0.1
    // );

    // float strength = 1.0 - step(0.02, abs(distance(waveUv, vec2(0.5)) - 0.25));

    // Pattern 38
    // vec2 waveUv = vec2(
    //     vUv.x + sin(vUv.y * 30.0) * 0.1,
    //     vUv.y + sin(vUv.x * 30.0) * 0.1
    // );

    // float strength = 1.0 - step(0.02, abs(distance(waveUv, vec2(0.5)) - 0.25));

    // Pattern 39
    // vec2 waveUv = vec2(
    //     vUv.x + sin(vUv.y * 100.0) * 0.1,
    //     vUv.y + sin(vUv.x * 100.0) * 0.1
    // );

    // float strength = 1.0 - step(0.02, abs(distance(waveUv, vec2(0.5)) - 0.25));

    // Pattern 40
    // float angle = atan(vUv.x, vUv.y);
    // float strength = angle;

    // Pattern 41
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    // float strength = angle;

    // Pattern 42
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    // angle /= PI * 2.0;
    // angle += 0.5;
    // float strength = angle;

    // Pattern 43
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    // angle /= PI * 2.0;
    // angle += 0.5;
    // angle *= 20.0;
    // angle = mod(angle, 1.0);
    // float strength = angle;

    // Pattern 44
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    // angle /= PI * 2.0;
    // angle += 0.5;
    // float strength = sin(angle * 50.0 * 2.0);

    // Pattern 45
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    // angle /= PI * 2.0;
    // angle += 0.5;
    // float sinusoid = sin(angle * 100.0);

    // float radius = 0.45 + sinusoid * 0.05;
    // float strength = 1.0 - step(0.02, abs(distance(vUv, vec2(0.5)) - radius));

    // Pattern 46
    // float strength = cnoise(vUv * 10.0);

    // Pattern 47
    // float strength = step(0.0, cnoise(vUv * 10.0));

    // Pattern 48
    // float strength = 1.0 - abs(cnoise(vUv * 10.0));

    // Pattern 49
    // float strength = sin(cnoise(vUv * 10.0) * 20.0);




















    gl_FragColor = vec4(vec3(strength), 1.0);
}