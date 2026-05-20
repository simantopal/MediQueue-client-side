import { Moon, Sun } from '@gravity-ui/icons';
import { Switch } from '@heroui/react';
import React from 'react';

const ThemeToggle = () => {
const icons = {
    darkMode: {
      off: Moon,
      on: Sun,
      selectedControlClass: "",
    },
}
    
    return (
        <div className="flex gap-3">
      {Object.entries(icons).map(([key, value]) => (
        <Switch key={key} defaultSelected size="lg">
          {({isSelected}) => (
            <>
              <Switch.Control className={isSelected ? value.selectedControlClass : ""}>
                <Switch.Thumb>
                  <Switch.Icon>
                    {isSelected ? (
                      <value.on className="size-3 text-inherit opacity-100" />
                    ) : (
                      <value.off className="size-3 text-inherit opacity-70" />
                    )}
                  </Switch.Icon>
                </Switch.Thumb>
              </Switch.Control>
            </>
          )}
        </Switch>
      ))}
    </div>
    );
};

export default ThemeToggle;