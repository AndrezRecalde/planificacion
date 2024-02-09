<?php

namespace App\Policies;

use App\Models\Application;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ApplicationPolicy
{


    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Application $application): bool
    {
        if (!$user->hasRole('ADMIN')) {
            return false;
        }
        return true;
    }


}
